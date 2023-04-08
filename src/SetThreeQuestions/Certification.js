import React from "react";

const studentData = [
  {
    id: 1,
    name: "Nitin",
    marks: 78,
  },
  {
    id: 2,
    name: "Mehak",
    marks: 95,
  },
  {
    id: 3,
    name: "Mehul",
    marks: 65,
  },
  {
    id: 4,
    name: "Nina",
    marks: 56,
  },
];

const Card = ({ studentData }) => {
  const meanMarks = studentData.reduce((acc, { marks }) => acc + marks, 0) / studentData.length;
  return <p>Certification {meanMarks < 80 ? "Not" : ""} Approved</p>;
};

const Certification = () => {
  return (
    <div>
      <Card studentData={studentData} />
    </div>
  );
};

export default Certification;