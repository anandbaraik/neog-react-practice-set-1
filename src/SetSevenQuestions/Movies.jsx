import { useState, useEffect, useRef } from "react";

import { fetchMovies } from "./API/fetchMovies";

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const OGMovieList = useRef(null);

  const fetchMovieData = async () => {
    try {
      const res = await fetchMovies("https://example.com/api/movies");
      const { data } = res;
      setIsLoading(false);
      setMovieList(data);
      OGMovieList.current = data;
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const changeHandler = function (e) {
    const yearSelected = +e.target.value;
    if (e.target.value === "All") {
      setMovieList(OGMovieList.current);
      return;
    }
    const filteredList = OGMovieList.current.filter(
      ({ year }) => year === yearSelected
    );
    setMovieList(filteredList);
  };

  return (
    <div>
      <h1>Movies</h1>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <label htmlFor="years">Filter by Year: </label>
          <select id="years" onChange={changeHandler}
            style={{marginBottom:"1rem"}}>
            <option value="All">All</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
          </select>
          <div>
            {movieList.length === 0 ? (
              <h1>Not found Any movie</h1>
            ) : (
              movieList.map(({ title, year, rating }) => (
                <div key={title}>
                  <strong>Name: {title}</strong>
                  <p>Year: {year}</p>
                  <p>Rating: {rating}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
