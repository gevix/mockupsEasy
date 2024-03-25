import React from "react";

function CenterHorizontallyButton({ setIsCenterHorizontally }) {
  const handleClick = () => {
    setIsCenterHorizontally((prevState) => !prevState);
  };

  return (
    <button className="btn btn-block" onClick={handleClick}>
      Center Horizontally
    </button>
  );
}

export default CenterHorizontallyButton;
