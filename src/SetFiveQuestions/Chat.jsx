import { useEffect, useState } from "react";

import { fakeFetch4 } from "./API/fakeFetch4";

export default () => {
  const [chatData, setChatData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchChats = async () => {
    try {
      const res = await fakeFetch4("https://example.com/api/userchat");
      const { data } = res;
      setIsLoading(false);
      setChatData(data);
    } catch (err) {
      console.log(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <h1>Whatsapp Chats</h1>
      { isLoading ? (<h3>Loading Chats....</h3>) :
        (<>
            <ul style={{textAlign:"center"}}>
                {chatData.map(( { name, messages }) => {
                return (
                    <span key={name}>
                        <li style={{ fontSize: "1.5rem",padding: "1rem",fontWeight: 600}}>{name}'s Chat</li>
                        <ul style={{marginLeft:"10px"}}>
                                {
                                    messages.map(({ from, message }, index) => {
                                        return (
                                            <li key={index}>
                                                <strong>{from}</strong>: {message}
                                            </li>
                                        );
                                    })
                                }
                        </ul>
                    </span>
                );
                })}
            </ul>
        </>
        )
        }
    </div>
  );
};
