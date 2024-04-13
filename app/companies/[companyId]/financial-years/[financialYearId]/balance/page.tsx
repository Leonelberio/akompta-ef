export default function BalancePage({params}:{params: {financialYearId: string}}) {
  return <h1>Welcome to Balance Page Years Page of the Financial year Id : {params.financialYearId}</h1>;
}