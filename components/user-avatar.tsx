//@ts-nocheck

import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session.user) return null;

  return (
    <div>
      <Image src={session.user.img} alt="User Avatar" className="h-5 w-5" />
    </div>
  );
}
