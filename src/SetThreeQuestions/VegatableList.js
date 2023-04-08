import React, { useState } from "react";

const vegetables = [
  {
    id: 1,
    name: "Carrots",
    pickDate: "2023-03-25",
  },
  {
    id: 2,
    name: "Broccoli",
    pickDate: "2023-03-30",
  },
  {
    id: 3,
    name: "Peppers",
    pickDate: "2023-03-25",
  },
  {
    id: 4,
    name: "Tomatoes",
    pickDate: "2023-03-27",
  },
  {
    id: 5,
    name: "Ladies Finger",
    pickDate: "2023-03-30",
  },
];

const VegCard = ({ vegetables }) => {
  const [highlight, setHighlight] = useState(false);
  return (
    <>
      <ol>
        {vegetables.map(({ id, name, pickDate }) => {
          return (
            <li
              key={id}
              style={{
                color:
                  highlight && pickDate === "2023-03-30" ? "yellowgreen" : "",
              }}
            >
              <h1>{name}</h1>
              {pickDate}
            </li>
          );
        })}
      </ol>
      <button onClick={() => setHighlight(!highlight)}>
        Highlight Fresh Vegetables
      </button>
    </>
  );
};

const VegatableList = () => {
  return (
    <div >
      <VegCard vegetables={vegetables} />
    </div>
  );
};

export default VegatableList;