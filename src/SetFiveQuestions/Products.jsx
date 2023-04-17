import React, { useEffect, useState } from 'react'
import { fakeFetch2 } from './API/fakeFetch2'
export const Products = () => {
    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const fetchProducts = async () => {
    try {
        const response = await fakeFetch2("https://example.com/api/products");

        if(response.status === 404) throw new Error(response);

        const {data:{products}} = response;

        if(products) {
            setProductList(products);
            setFilteredProducts(products);
        };

    } catch (error) {
        console.error(`Product fetch error - ${error.message}`);
    }
  }

  const filterProducts = () => {
    const products = productList.filter(({quantity}) => quantity > 20);

    if(products) setFilteredProducts(products);
  }

  const filterByPrice = () => {
    const products = productList.filter(({price}) => price < 100);

    if(products) setFilteredProducts(products);
  }

  useEffect(() => {
    fetchProducts();
}, []);

  return (
    <div>
        <h2>Products</h2>

        {
            (filteredProducts == 0) ?
                (<h3>Loading</h3>) :
            (   <>
                <button onClick={filterProducts}>
                    Show products with quantity more than 20
                </button> {" "}
                <button onClick={filterByPrice}>
                    Filter by Price
                </button>
                <ul>
                    {
                        filteredProducts?.map(({name, price, quantity}, index) => {
                            return (
                                <li key={index}>
                                    {name} - Rs. {price} - Quantity : {quantity}
                                </li>
                            )
                        })
                    }
                </ul>
                </>
            )
        }
    </div>
  )
}
