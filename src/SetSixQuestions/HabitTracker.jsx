import { useState, useEffect } from "react";

import { fetchHabitTracker } from "./API/fetchHabitTracker";

export default () => {
  const [habitsData, setHabitsData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetchHabitTracker("https://example.com/api/habits");
      const {
        data: { habits }
      } = res;
      setHabitsData(habits);
    } catch (err) {
      console.log(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Habit Tracker</h2>
      {habitsData.map(({ title, desc, daysFollowed, daysSkipped }) => {
        return (
          <div key={title} className="todo" style={{ margin: "0.5rem" }}>
            <strong className="habit">{title}</strong> :
            <span>{desc}</span>
            <p>
              <strong>Days Followed: </strong> {daysFollowed}
            </p>
            <p>
              <strong>Days Skipped: </strong> {daysSkipped}
            </p>
          </div>
        );
      })}
    </div>
  );
};
