import React from 'react'

const ProductsCard = ({products}) => {
    console.log(products);
  return (
    <div>
        <h3>Products Name</h3>
        <ul>
            {
                products.map(({name,quantity, sales}, index) => (
                    <li key={index}>
                    Name : {name} | Quantity : {quantity} | Sales : {sales}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ProductsCard