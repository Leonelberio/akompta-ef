//@ts-nocheck

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
import { signIn } from "@/auth";

export default function SignupForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Inscription</CardTitle>
        <CardDescription>
          Veuillez saisir vos informations pour créer un compte.
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
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Créer un compte
          </Button>
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button variant="outline" className="w-full">
              S&apos;inscrire avec Google
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Avez-vous déjà un compte?{" "}
          <Link href="/signin" className="underline">
            Se connecter
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
