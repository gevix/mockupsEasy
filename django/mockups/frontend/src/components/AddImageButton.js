import React, { useRef } from "react";
import { Button } from "@mui/material";

function AddImageButton({ setImage }) {
  const fileInput = useRef();

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-end">
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button size="sm" variant="outline" onClick={handleButtonClick}>
        Add Image
      </Button>
    </div>
  );
}

export default AddImageButton;
