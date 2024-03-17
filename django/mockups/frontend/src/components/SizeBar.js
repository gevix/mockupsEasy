import React from "react";

function SizeBar({ size, setSize }) {
  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
  };
  console.log(size);
  return (
    <div className="space-y-4">
      <h1>Change your image size:</h1>
      <input
        type="range"
        min={0}
        max="120"
        value={size}
        className="range"
        onChange={handleSizeChange}
      />
    </div>
  );
}

export default SizeBar;
