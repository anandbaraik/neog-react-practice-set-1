import { useState, useEffect } from "react";
import { fetchUserData } from "./API/fetchUserData";

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [showAddress, setShowAddress] = useState(false);

  const fetchUser = async function () {
    try {
      const res = await fetchUserData("https://example.com/api/user");
      const { data } = res;
      setIsLoading(false);
      setUser(data);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>User</h1>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <button onClick={() => setShowAddress(!showAddress)}>
            {showAddress ? "Hide Address" : "Show Address"}
          </button>
          {showAddress && (
            <div>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
