import { useState, useEffect, useRef } from "react";
import { fetchUsers } from './API/fetchUsers'
const Users = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const originalUsersList = useRef(null);
  const uniqueCompanies = useRef();

  const fetchUsersData = async () => {
    try {
      const res = await fetchUsers("https://example.com/api/users");
      const { data } = res;
      setIsLoading(false);
      setUsersList(data);
      originalUsersList.current = data;
      uniqueCompanies.current = getUniqueCompanies(data);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const getUniqueCompanies = function (data) {
    return [...new Set(data.map(({ company }) => company))];
  };

  const changeHandler = (e) => {
    const companySelected = e.target.value;
    if (companySelected === "All") {
      setUsersList(originalUsersList.current);
      return;
    }
    setUsersList(
      originalUsersList.current.filter(
        ({ company }) => company === companySelected
      )
    );
  };
  return (
    <div>
        <h2>Users</h2>
        {isLoading ? (
        <h2>Loading......</h2>
      ) : (
        <div>
          <label htmlFor="company">Filter by Company: </label>
          <select id="company" onChange={changeHandler}>
            <option value="All">All</option>
            {uniqueCompanies.current.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
          <ul>
            {usersList.map(({ name, email, website, company }) => (
              <div key={email} style={{border:"1px solid"}}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{website}</p>
                <p>{company}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Users