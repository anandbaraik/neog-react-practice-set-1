import { useState, useEffect, useRef } from "react";
import { fetchStationary } from "./API/fetchStationary";

export default () => {
  const [stationaryList, setStationaryList] = useState([]);
  const [sortedStationaryList, setSortedStationaryList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const originalProductList = useRef(null);
  const fetchProducts = async () => {
    try {
      const res = await fetchStationary("https://example.com/api/products");
      const {data: { products }} = res;
      setStationaryList(products);
      originalProductList.current = sortByRating(products);
      setSortedStationaryList(originalProductList.current);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortByRating = (products) => {
    const stationaryItems = [...products];
    stationaryItems.sort(({ rating: ratingA }, { rating: ratingB }) => ratingB - ratingA);
    return stationaryItems;
  };

  const changeHandler = (e) => {
    setInputSearch(e.target.value);
    const currSearchQuery = e.target.value;
    if (!currSearchQuery) {
      setSortedStationaryList(originalProductList.current);
      return;
    }
    const searchResults = originalProductList.current.filter(({ name }) =>
      name.toLowerCase().includes(currSearchQuery.toLowerCase())
    );
    setSortedStationaryList(searchResults);
  };

  return (
    <>
      {!stationaryList.length ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <h1>Products</h1>
          <input
            type="text"
            placeholder="Search..."
            value={inputSearch}
            onChange={changeHandler}
          />
          <ul>
            {sortedStationaryList.map(({ name, price, quantity, rating }) => (
              <div key={name} style={{border:"1px solid "}}>
                <strong>{name}</strong>
                <p>{price}Rs.</p>
                <p>{quantity}</p>
                <p>{rating}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
