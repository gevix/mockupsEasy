import React from "react";
import { Button } from "@mui/material";

function CenterHorizontallyButton({ setIsCenterHorizontally }) {
  const handleClick = () => {
    setIsCenterHorizontally(prevState => !prevState);
  };

  return (
    <Button size="sm" onClick={handleClick}>
      Center Horizontally
    </Button>
  );
}

export default CenterHorizontallyButton;