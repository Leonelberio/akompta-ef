//@ts-nocheck
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    //   profile(profile) {
    //     return {
    //       id: profile.sub,
    //       role: profile.role ?? RoleType.USER,
    //       email: profile.email,
    //       emailVerified: profile.email_verified,
    //       image: profile.picture,
    //     };
    //   },
    // }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ], // Add providers with an empty array for now
} satisfies NextAuthConfig;
