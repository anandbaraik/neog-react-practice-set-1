import React from "react";

const cars = [
  {
    id: 1,
    name: "supra",
    price: 500000,
    category: "sports",
  },
  {
    id: 2,
    name: "A5",
    price: 700000,
    category: "luxury",
  },
  {
    id: 3,
    name: "huyara",
    price: 1500000,
    category: "sports",
  },
  {
    id: 4,
    name: "agera R",
    price: 3500000,
    category: "sports",
  },
];

const ShowTotalCarsInCategory = ({ cars }) => {
  const categoryData = cars.reduce((acc, { category }) => {
    acc[category] ? acc[category]++ : (acc[category] = 1);
    return acc;
  }, {});
  const categoryDataArray = Object.entries(categoryData);
  return (
    <ul>
      {categoryDataArray.map(([key, value], i) => {
        return (
          <li key={i} className="cateory-item">
            {key}: {value}
          </li>
        );
      })}
    </ul>
  );
};

const TotalCars = () => {
  return (
    <div>
      <ShowTotalCarsInCategory cars={cars} />
    </div>
  );
};

export default TotalCars;