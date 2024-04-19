"use client";

import {
  Bell,
  Book,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import { SidebarItem } from "./sidebar-item";
import { log } from "console";

const guestRoutes = [
  {
    icon: Home,
    label: "Tableau de bord",
    href: "/dashboard",
  },
  {
    icon: ShoppingCart,
    label: "Sociétés",
    href: "/companies",
  },

  {
    icon: Book,
    label: "Plan comptable",
    href: "/plan-comptable",
  },
  {
    icon: Users,
    label: "Contacts",
    href: "/contacts",
  },
  {
    icon: Settings,
    label: "Parametres",
    href: "/settings",
  },
];

export const SidebarRoutes = () => {
  const routes = guestRoutes;
  return (
    <>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </>
  );
};
