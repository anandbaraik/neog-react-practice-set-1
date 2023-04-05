import React from 'react'

const Gadgets = ({products}) => {
  return (
    <div>
        <h3>Gadgets</h3>
        <ol>
            {
                products.map(({id, name, description, price}) => {
                    return (
                        <li key={id}
                            style={{
                                padding:"2px",
                                border: `${(price > 50000) && '2px solid purple'}`
                            }}>
                            Name: {name} | Price : {price}
                            <p>{description}</p>
                        </li>
                    )
                })
            }
        </ol>
    </div>
  )
}

export default Gadgets