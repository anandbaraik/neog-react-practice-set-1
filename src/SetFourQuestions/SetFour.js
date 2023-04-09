import React from 'react'
import TabComponent from './TabComponent'
import Vegitables from './Vegitables'

export const SetFour = () => {
  const itemList = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
  ];
  return (
    <div>
        <h1>ReactJS Practice Question Set 4</h1>
        {/* <TabComponent/> */}
        <Vegitables itemList={itemList}/>
    </div>
  )
}
