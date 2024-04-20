//@ts-nocheck

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { findUserByEmail } from "./actions/auth";

async function getUser(email: string): Promise<User | null> {
  try {
    return await findUserByEmail(email);
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // Parsing and validating incoming credentials using Zod
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          // If user exists, compare hashed passwords
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // If passwords match, return the user
          if (passwordsMatch) return user;
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
