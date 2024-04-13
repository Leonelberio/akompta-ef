import React from "react";
import CompanyCard from "../components/CompanyCard";

function Home() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-1 gap-4">
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  );
}

export default Home;
