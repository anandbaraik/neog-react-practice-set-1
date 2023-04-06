import React from 'react'

const cartoonsArr = [
    {
        id: 1,
        name: 'Mickey Mouse',
        superpower: 'Invisibility',
        magnitude: 1
      },
      {
        id: 2,
        name: 'Spongebob Squarepants',
        superpower: 'Super Strength',
        magnitude: 3
      },
      {
        id: 3,
        name: 'Bugs Bunny',
        superpower: 'Teleportation',
        magnitude: 9
      },
      {
        id: 4,
        name: 'Tom and Jerry',
        superpower: 'Intelligence',
        magnitude: 8
      },
      {
        id: 5,
        name: 'The Powerpuff Girls',
        superpower: 'Flight',
        magnitude: 10
      }
    ]

const Card = ({cartoons, superpower}) => {
    const cartoonsWithHigherMag = cartoons.filter(cartoon => (cartoon.superpower == superpower));
    return (
      <div>
        <h1>{"Cartoons with superpower - Intelligence"}</h1>
        {
            cartoonsWithHigherMag.map(({id, name, superpower, magnitude}) => {
                return (
                    <div key={id}
                        style={{padding:"2px", margin:"2px"}}>
                        <p>{name} - {superpower} - {magnitude}</p>
                    </div>
                )
            })
        }
      </div>
    )
  }

const CartoonWithIntelligence = () => {
  return (
    <div>
        <Card cartoons={cartoonsArr} superpower={"Intelligence"}/>
    </div>
  )
}

export default CartoonWithIntelligence