import React from 'react'

const Phones = ({products}) => {
    let phones = products.filter(({ name }) => name === "mobile");
    return (
      <ul>
        {phones.map(({ id, name, description, price }) => {
          return (
            <li key={id}>
                Name : {name}, Price : {price}
                <p>{description}</p>
            </li>
          );
        })}
      </ul>
    );
}

export default Phones