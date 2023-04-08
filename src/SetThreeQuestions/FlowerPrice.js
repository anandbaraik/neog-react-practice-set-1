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


const Flower = ({ bouquet }) => {
    const getFlowerPrice = (flower) => bouquet.find(({ flowers }) => flowers.some((e) => e === flower)).price;
    return <p>Price of bouquet with roses: {getFlowerPrice("rose")}</p>;
};

const FlowerPrice = () => {
  return (
    <div>
        FlowerPrice
        <Flower bouquet={bouquet}/>
    </div>
  )
}

export default FlowerPrice