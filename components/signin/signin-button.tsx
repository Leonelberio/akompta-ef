"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button onClick={() => signIn()}>
      <svg>...</svg> Log in with GitHub
    </button>
  );
}
