import React, { useState } from "react";

const ColorPicker = () => {
    const red = "#EE4B2B";
    const blue = "#89CFF0";
    const green = "#7FFFD4";

    const [showColor, setShowColor] = useState({
        red: false,
        blue: false,
        green: false,
    });

    const colorHandler = (color) => {
        setShowColor({ ...showColor, [color]: !showColor[color] });
    };
  return (
    <div>
        <h1>
            Color Picker
        </h1>
        <button onClick={() => colorHandler("red")}>
            Red color
        </button>
      {showColor.red && (
        <p style={{ backgroundColor: red }}>
          {red}
        </p>
      )}
      <button onClick={() => colorHandler("blue")}>
        Blue color
      </button>
      {showColor.blue && (
        <p style={{ backgroundColor: blue }}>
          {blue}
        </p>
      )}
      <button onClick={() => colorHandler("green")}>
        Green color
      </button>
      {showColor.green && (
        <p style={{ backgroundColor: green }}>
          {green}
        </p>
      )}
    </div>
  )
}

export default ColorPicker