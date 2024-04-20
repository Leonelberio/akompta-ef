"use client"; //tells Next.js to render this component on the client

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import CustomSignInButton from "@/components/signin/signin-button";
import SignInButton from "@/components/signin/signin-button";

export default function Home() {
  return (
    <main>
      <SignInButton />
    </main>
  );
}
