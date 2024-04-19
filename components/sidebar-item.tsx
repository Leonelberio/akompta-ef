"use client";

import { cn } from "@/lib/utils";
import { Home, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}
export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          isActive && "text-primary bg-muted"
        )}
      >
        <div className="flex items-center gap-x-2 py-2">
          <Icon
            size={22}
            className={cn("text-muted-foreground", isActive && "text-primary")}
          />
        </div>
        {label}
      </button>
    </>
  );
};
