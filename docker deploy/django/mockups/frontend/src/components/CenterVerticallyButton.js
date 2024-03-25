import React from "react";

function CenterVerticallyButton({ setIsCenterVertically }) {
  const handleClick = () => {
    setIsCenterVertically((prevState) => !prevState);
  };

  return (
    <button className="btn btn-block" onClick={handleClick}>
      Center Vertically
    </button>
  );
}

export default CenterVerticallyButton;
