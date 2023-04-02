import React from 'react'

const Stationary = ({header, items}) => {
  return (
    <div>
        <h3>{header}</h3>
        <ul>
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Stationary