import React, { useEffect, useState } from 'react'
import {fakeFetch} from "./API/fakeFetch1";
const Users = () => {
    const [userList, setUserList] = useState([]);
    const fetchUsers = async () => {
        try {
            const result = await fakeFetch("https://example.com/api/users/status");
            if (result?.status === 404) throw new Error(result);
            let {data:{users}, status} = result;
            if(users) setUserList(users);
        } catch (error) {
            console.error(`${error.status} : ${error.message}`);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const getStyle = (status) => {
        return {color: `${status == 'Online' ? 'green' : 'red'}`, padding:"5px"}
    }
  return (
    <div>
        <h1>Online Users</h1>
        {
            userList?.map(({name, status}, index) => (
                <div key={index} style={getStyle(status)}>
                    {name} - {status}
                </div>
            ))
        }
    </div>
  )
}

export default Users