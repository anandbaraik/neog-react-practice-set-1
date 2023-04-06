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

const Card = ({cartoons}) => {
    const cartoonsWithHigherMag = cartoons.filter(({magnitude}) => magnitude > 5);
    return (
      <div>
        <h1>{"Cartoons with magnitude > 5"}</h1>
        {
            cartoonsWithHigherMag.map(({id, name, superpower, magnitude}) => {
                return (
                    <div key={id}
                        style={{padding:"2px", margin:"2px"}}>
                        <p>Name : {name}</p>
                        <p>Superpower : {superpower}</p>
                        <p>Magnitude : {magnitude}</p>
                    </div>
                )
            })
        }
      </div>
    )
  }

const Cartoons = () => {
  return (
    <div>
        <Card cartoons={cartoonsArr}/>
    </div>
  )
}

export default Cartoons