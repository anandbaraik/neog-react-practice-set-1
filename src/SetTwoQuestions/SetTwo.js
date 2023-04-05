import React from 'react'
import Greeting from './Greeting'
import Product from './Product'
import UserProfile from './UserProfile'
import Gadgets from './Gadgets'
import Phones from './Phones'
import Article from './Article'
import About from './About'

const SetTwo = () => {
    //Q3
    const userData = {
        name: 'John',
        age: 25,
        email: 'john@example.com',
    }
    //Q4
    const products = [
        {
            id: 1,
            name: 'keyboard',
            description: 'Logitech Mechanical Keyboard',
            price: 2000,
        },
        { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
        {
            id: 3,
            name: 'monitor',
            description: 'Lenovo 32-inch display Monitor',
            price: 10000,
        },
        { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
        {
            id: 5,
            name: 'speakers',
            description: 'Creative Desktop Speakers',
            price: 5000,
        },
        {
            id: 6,
            name: 'headphones',
            description: 'Sony over-the-ear wired Headphones with mic',
            price: 1500,
        },
        { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
    ]
    const phones = [
    {
        id: 1,
        name: 'keyboard',
        description: 'Logitech Mechanical Keyboard',
        price: 2000,
    },
    { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
    { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
    {
        id: 4,
        name: 'monitor',
        description: 'Lenovo 32-inch display Monitor',
        price: 10000,
    },
    { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
    {
        id: 6,
        name: 'speakers',
        description: 'Creative Desktop Speakers',
        price: 5000,
    },
    {
        id: 7,
        name: 'headphones',
        description: 'Sony over-the-ear wired Headphones with mic',
        price: 1500,
    },
    { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
    ]
  return (
    <div>
        <h1>ReactJS Practice Question Set 2</h1>
        {/* <Greeting name={'Anand'}/> */}
        {/* <Product name={'Bluetooth'} price={250}/> */}
        {/* <UserProfile userData={userData}/> */}
        {/* <Gadgets products={products}/> */}
        {/* <Phones products={phones}/> */}
        {/* <Article
            title={"React is awesome"}
            content={"React is a JavaScript library for building user interfaces."}
            /> */}
        {/* <About heading={"About Me"} name={"Preeti"} learning={"I am learning React JS currently at neoG Camp."}/> */}
    </div>
  )
}

export default SetTwo