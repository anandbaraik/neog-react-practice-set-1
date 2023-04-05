import React from 'react'

const Product = ({name, price}) => {
  return (
    <div>
        Name:
        <strong style={{color:"blue"}}>
            {name}
        </strong>
        |
        Price :
        <span style={{color:"green", textDecoration:"italic"}}>
            <i>{price}</i>
        </span>
    </div>
  )
}

export default Product