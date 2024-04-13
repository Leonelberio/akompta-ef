// app/components/CompanyCard.tsx
const CompanyCard = ({ company }) => {
  // Your styling and structure for the card
  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CompanyCard;
