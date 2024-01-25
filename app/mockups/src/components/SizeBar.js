import React from "react";

function SizeBar({ size, setSize }) {
  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
  };

  return (
    <div>
      <input type="range" min="1" max="100" value={size} onChange={handleSizeChange} />
    </div>
  );
}

export default SizeBar;