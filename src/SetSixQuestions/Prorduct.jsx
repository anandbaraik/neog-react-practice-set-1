import { useState, useEffect } from "react";

import { fetchProduct } from "./API/fetchProduct";

export default () => {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetchProduct("https://example.com/api/products");
      const {
        data: { products }
      } = res;
      setProductList(products);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = (name) => {
    const filteredProduct = productList.filter(
      ({ name: nameProduct }) => nameProduct === name
    );
    setFilteredProductList(filteredProduct);
  };

  return (
    <div>
      <h2>Product Details:</h2>
      {productList.map(({ name }) => (
        <button key={name} className="btn" onClick={() => clickHandler(name)}>
          Show {name}
        </button>
      ))}
      {filteredProductList.map(({ name, price, desc, src }) => (
        <div key={name}>
          <div>
            <img src={src} width="150" alt="desc" />
          </div>
          <h3>Name: {name}</h3>
          <p>
            <strong>Price: </strong>
            {price}
          </p>
          <p>
            <strong>Description: </strong>
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
};
