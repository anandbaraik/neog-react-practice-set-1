import "./styles.css";
import {EmployeeCard} from "./Questions/EmployeeCard";
import { CustomButton } from "./Questions/CustomButton";
import { DisplayImage } from "./Questions/DisplayImage";
import Stationary from "./Questions/Stationary";
import ProductsCard from "./Questions/ProductsCard";

export default function App() {
  //Q1
  const employees = [
    { id: "1", name: "Arpit Jain", workExperience: 6, designation: "Sales" },
    {id: "2", name: "Monica Jaiswal", workExperience: 4, designation: "Developer"},
    { id: "3", name: "Priya Shetty", workExperience: 9, designation: "R&D" },
    { id: "4", name: "Aman Sen", workExperience: 1, designation: "Admin" }
  ];

  //Q2
  const backgroundColor = "lightgreen";
  const color = "darkgreen";
  const borderRadius = "5px";
  const padding = "10px"

  // Q3
  const items = ['pen', 'pencil', 'ruler', 'eraser']

  //Q4
  const imageLink = "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";

  //Q5
  const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 },
  ]
  return (
    <div className="App">
      <h1>ReactJS Practice Question Set 1</h1>
      {/* <EmployeeCard employees={employees}/> */}
      {/* <CustomButton
          backgroundColor={backgroundColor}
          color={color}
          borderRadius={borderRadius}
          padding={padding}
      /> */}
      {/* <DisplayImage
        img={imageLink}
        caption={caption}
      /> */}
      {/* <Stationary
        items={items}
        header={Stationary}
      /> */}
      {/* <ProductsCard
        products={products}
      /> */}
    </div>
  );
}
