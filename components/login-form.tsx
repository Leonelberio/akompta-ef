"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  // const { data, status } = useSession();
  const router = useRouter();

  // if (status === "loading") {
  //   return <div>Chargement...</div>;
  // }
  // if (status === "authenticated") {
  //   router.push("/dashboard");
  // }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Connexion</CardTitle>
        <CardDescription>
          Entrez votre email pour vous connecter à votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Mot de passe</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Mot de passe oublié ?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Se connecter
          </Button>
          <Button variant="outline" className="w-full">
            Se connecter avec Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Pas de compte?{" "}
          <Link href="/signup" className="underline">
            S&apos;inscrire
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
