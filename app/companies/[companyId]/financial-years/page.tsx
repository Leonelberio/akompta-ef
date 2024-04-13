//@ts-nocheck

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FinancialYears from "@/app/components/FinancialYears";

async function fetchFinancialYears(params) {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const res = await fetch(process.env.BASE_URL + "/api/companies/"+params+"/financial-years", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function FinancialYearsPage({params}:{params: {companyId: string}}) {


  const financialyears = await fetchFinancialYears(params.companyId);

  return (
    <div className="container">
      <div className="p-8">
        <h1 className="text-2xl font-bold">Exercices</h1>
      </div>
      <div>
        <FinancialYears financialyears={financialyears}/>
      </div>
    </div>
  );
}

export default FinancialYearsPage;
