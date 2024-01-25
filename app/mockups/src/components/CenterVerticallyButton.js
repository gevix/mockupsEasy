import React from "react";

function CenterVerticallyButton({ setIsCenterVertically }) {
  const handleClick = () => {
    setIsCenterVertically(prevState => !prevState);
  };

  return (
    <button onClick={handleClick}>
      Center Horizontally
    </button>
  );
}

export default CenterVerticallyButton;