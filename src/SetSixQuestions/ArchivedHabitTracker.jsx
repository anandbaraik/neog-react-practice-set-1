import { useState, useEffect } from "react";

import { fetchArchievedTracker } from "./API/fetchArchievedTracker";

export default () => {
  const [displayedList, setDisplayedList] = useState([]);
  const [isUnarchived, setIsUnarchived] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetchArchievedTracker("https://example.com/api/habits");
      const {
        data: { habits: todoItems }
      } = res;
      setDisplayedList(todoItems);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showArchiveHandler = () => {
    setIsUnarchived(false);
  };

  return (
    <div>
      <h2>{isUnarchived ? "Unarchived" : "Archived"}</h2>
      {displayedList
        .filter(({ archived }) => archived === !isUnarchived)
        .map(({ title, desc, daysFollowed, daysSkipped }) => (
          <div key={title} className="todo">
            <h4>{title}</h4>
            <p>{desc}</p>
            <p>
              <strong>Days Followed: </strong>
              {daysFollowed}
            </p>
            <p>
              <strong>Days Skipped: </strong>
              {daysSkipped}
            </p>
          </div>
        ))}
      <button className="btn" onClick={showArchiveHandler}>
        Show Archives
      </button>
    </div>
  );
};
