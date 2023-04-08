import React from 'react'

const bouquet = [
    {
      id: 1,
      flowers: ["rose", "lily", "marigold"],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ["snapdragon", "sunflower"],
      totalFlowers: 10,
      price: 3400,
    },
  ];

  const Flowers = ({ bouquet }) => {
    const filteredFlowers = bouquet.filter(({ price }) => price > 2000)[0].flowers;
    return (
      <ol >
        {filteredFlowers.map((flower, i) => {
          return <li key={i}>{flower}</li>;
        })}
      </ol>
    );
  };

const FlowersGreaterThan2000 = () => {
  return (
    <div>
        <h2>FlowersGreaterThan2000</h2>
        <Flowers bouquet={bouquet} />
    </div>
  )
}

export default FlowersGreaterThan2000