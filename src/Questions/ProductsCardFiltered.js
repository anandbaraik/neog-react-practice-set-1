import React from 'react'

const ProductsCardFiltered = ({products}) => {
    console.log(products);
  return (
    <div>
        <h3>Products with more sales than quantity</h3>
        <ul>
            {
                products.filter(({quantity, sales}) => sales > quantity)
                    .map(({name,quantity, sales}, index) => (
                    <li key={index}>
                    Name : {name} | Quantity : {quantity} | Sales : {sales}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ProductsCardFiltered