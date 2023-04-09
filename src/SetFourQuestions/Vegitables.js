import React, { useState } from 'react'

const Vegitables = ({itemList}) => {
    const [items, setItems] = useState(itemList);
    const filterOut = (category) => {
        let list = [];
        if(category) {
            list = itemList.filter(({category:type}) => category === type);
        } else {
            list = itemList;
        }
        setItems(() => list);
    }
  return (
    <div>
        <h2>Vegitables</h2>
        <button
            onClick={() => filterOut('')}>
            All
        </button>
        <button
            onClick={() => filterOut('Fruit')}>
            Fruites
        </button>
        <button onClick={() => filterOut('Vegetable')}>
            Vegitables
        </button>
        <div>
            <ul>
                {
                    items.map(({id, name, category}) => {
                        return (
                            <li key={id}
                                style={{
                                    color: `${category == 'Fruit' ? 'orange': 'green'}`
                                }}>
                                {name}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Vegitables