//@ts-nocheck

import React from "react";
import CompanyCard from "../components/CompanyCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function fetchCompanies() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const res = await fetch(process.env.BASE_URL + "/api/companies", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Home() {
  interface Company {
    id: number;
    ownerId: string;
    name: string;
    description?: string; // The '?' marks this field as optional
    createdAt: Date;
    updatedAt: Date;
  }

  const companies = await fetchCompanies();

  return (
    <div className="container">
      <div className="p-8">
        <h1 className="text-2xl font-bold">Societes</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {companies.map((company) => (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {company.id}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{company.name}</div>
              <p className="text-xs text-muted-foreground">{company.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
