import React from 'react'
import TabComponent from './TabComponent'
import Vegitables from './Vegitables'
import Game from './Game';
import Todo from './Todo';

export const SetFour = () => {
  const itemList = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
  ];
  const todoItems = [
    {id: 1, task: "Writing 1-page poem", isDone: true},
    {id: 2, task: "Gym", isDone: false},
    {id: 3, task: "Shopping", isDone: false},
    {id: 4, task: "Standup call", isDone: true},
  ]
  return (
    <div>
        <h1>ReactJS Practice Question Set 4</h1>
        {/* <TabComponent/> */}
        {/* <Vegitables itemList={itemList}/> */}
        {/* <Game/> */}
        <Todo todoItems={todoItems}/>
    </div>
  )
}
