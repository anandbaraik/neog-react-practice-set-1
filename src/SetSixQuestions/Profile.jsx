import { useState, useEffect } from "react";

import { fetchProfile } from "./API/fetchProfile";

export default () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetchProfile("https://example.com/api/profile");
      const {
        data: { profiles }
      } = res;
      setIsLoading(false);
      setProfile(profiles);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateHandler = () => {
    setProfile({ ...profile, name: "Emily" });
  };

  return (
    <div>
      <h2>Profiles</h2>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          <p>
            <strong>Name: </strong>
            {profile.name}
          </p>
          <p>
            <strong>Email: </strong>
            {profile.email}
          </p>
          <p>
            <strong>Age: </strong>
            {profile.age}
          </p>
          <p>
            <strong>Gender: </strong>
            {profile.gender}
          </p>
          <p>
            <strong>Occupation: </strong>
            {profile.occupation}
          </p>
          <button onClick={updateHandler}>Update Name</button>
        </div>
      )}
    </div>
  );
};
