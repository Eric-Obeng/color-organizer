/* eslint-disable react/prop-types */
// import React from "react"
import Color from "./Color";

const ColorList = ({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) => {
  if (!colors.length) return <div>No Color Listed. (Add a Color)</div>;
  return (
    <div className="color">
      {colors.map((color) => (
        <Color
         key={color.id} 
         {...color} 
         onRemove={onRemoveColor}
         onRate={onRateColor} />
      ))}
    </div>
  );
};

export default ColorList;
