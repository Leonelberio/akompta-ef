//@ts-nocheck

import React from "react";
import CompanyCard from "../components/Companies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Companies from "../components/Companies";

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

async function CompaniesPage() {


  const companies = await fetchCompanies();

  return (
    <div className="container">
      <div className="p-8">
        <h1 className="text-2xl font-bold">Societes</h1>
      </div>
      <div>
        <Companies companies={companies}/>
      </div>
    </div>
  );
}

export default CompaniesPage;
