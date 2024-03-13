import React from "react";
import { Button } from "@mui/material";

function CenterVerticallyButton({ setIsCenterVertically }) {
  const handleClick = () => {
    setIsCenterVertically((prevState) => !prevState);
  };

  return (
    <Button size="sm" onClick={handleClick}>
      Center Vertically
    </Button>
  );
}

export default CenterVerticallyButton;
