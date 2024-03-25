import React from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import Block from "@uiw/react-color-block";

function ColorPanel({ hsva, setHsva }) {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-md shadow-md">
      <h1>Choose your product color:</h1>
      <Block
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
      />
      <Wheel
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
      />
      <ShadeSlider
        hsva={hsva}
        style={{ width: 210, marginTop: 20 }}
        onChange={(newShade) => {
          setHsva({ ...hsva, ...newShade });
        }}
      />
    </div>
  );
}

export default ColorPanel;
