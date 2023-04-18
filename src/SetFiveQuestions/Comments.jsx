import { useEffect, useState } from "react";

import { fakeFetch5 } from "./API/fakeFetch5";

export default () => {
  const [commentsData, setCommentsData] = useState([]);

  const fetchData = async () => {
    try {
        const {data: { comments }} = await fakeFetch5("https://example.com/api/comments");
        setCommentsData(comments);
    } catch (err) {
      console.log(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = (name) => {
    setCommentsData(
      commentsData.filter(({ name: nameFromList }) => nameFromList !== name)
    );
  };

  return (
    <div>
      <h1>Comments:</h1>
      {commentsData.map(({ name, text }) => (
        <div key={name}>
          <h2>{name}</h2>
          <p>{text}</p>
          <button onClick={() => deleteHandler(name)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
