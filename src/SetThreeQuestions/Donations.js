import React from "react";

const DonationData = [
  {
    id: 1,
    name: "Nitin",
    Donation: 7800,
  },
  {
    id: 2,
    name: "Mehak",
    Donation: 9500,
  },
  {
    id: 3,
    name: "Mehul",
    Donation: 65000,
  },
  {
    id: 4,
    name: "Nina",
    Donation: 560,
  },
];

const TotalDonation = ({ data }) => {
  const totalAmount = data.reduce((acc, { Donation }) => acc + Donation, 0);
  return <p>Total Donation Collected : {totalAmount}</p>;
};

const Donations = () => {
  return (
    <div>
      <TotalDonation data={DonationData} />
    </div>
  );
};

export default Donations;