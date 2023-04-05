import React, { useState } from "react";
const MyGadgets = ({products}) => {
const [highlight, setHighlight] = useState(false);
  return (
    <div>
        <h1>MyGadgets</h1>
        <ol style={{ listStyle: "decimal" }}>
            {products.map(({ id, name, description, price }) => {
            return (
                <li
                key={id}
                style={{
                    padding:"2px",
                    margin:"2px",
                    backgroundColor: highlight && price > 50000 ? "lightgreen" : "",
                }}
                >
                {name}, {description}, {price}
                </li>
            );
            })}
        </ol>
        <button onClick={() => setHighlight(!highlight)}>
            Highlight Expensive Gadget
        </button>
    </div>
  )
}

export default MyGadgets