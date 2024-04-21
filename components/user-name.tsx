//@ts-nocheck

import { auth } from "@/auth";
import Image from "next/image";

export default async function UserName() {
  const session = await auth();

  if (!session.user) return null;

  return <div>Bienvenue {session.user.name}</div>;
}
