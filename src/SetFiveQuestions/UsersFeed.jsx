import { useEffect, useState } from "react";
import { fakeFetch3 } from "./API/fakeFetch3";

const UsersFeed = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
      try {
        const res = await fakeFetch3("https://example.com/api/users");
        const { data } = res;
        setLoading(false);
        setUserList(data);
      } catch (error) {
        console.log(`${error.status}: ${error.message}`);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div>
        <h1>Users Feed</h1>
        <p>{loading && (<h3>Loading.....</h3>)}</p>

        {userList.map((user) => (
          <div key={user.name}>
            <img src={user.image} width="20%" alt={user.name} loading="lazy"/>
            <h2>{user.name}</h2>
            <p>Likes: {user.likes}</p>
            <p>Comments: {user.comments}</p>
          </div>
        ))}
      </div>
    );
}

export default UsersFeed