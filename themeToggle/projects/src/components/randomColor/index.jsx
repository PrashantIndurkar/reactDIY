import React, { useState } from "react";

const RandomColorGenerator = () => {
  const [color, setColor] = useState();
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  //Create HEX
  const createHEXColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };

  const createRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  const handleGenerateColor = () => {
    if (typeOfColor === "hex") {
      createHEXColor();
    }
    if (typeOfColor === "rgb") {
      createRGBColor();
    }
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "40vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Hex</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB</button>
      <button onClick={handleGenerateColor}>Generate</button>
      <div>
        <h4>
          {typeOfColor === "rgb" ? "Generate RGB Color" : "Generate HEX Color"}
        </h4>
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
