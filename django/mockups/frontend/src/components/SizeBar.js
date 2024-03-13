import React from "react";
import { Slider } from "@mui/material";

function SizeBar({ size, setSize }) {
  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
  };
  console.log(size);
  return (
    <>
      <Slider
        aria-label="Change Size"
        min={1}
        max={100}
        value={size}
        onChange={handleSizeChange}
        valueLabelDisplay="auto"
      />
    </>
  );
}

export default SizeBar;
