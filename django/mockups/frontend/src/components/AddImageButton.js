import React, { useRef } from "react";

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
    <div className="flex">
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button className="btn btn-block btn-primary" onClick={handleButtonClick}>
        Add Image
      </button>
    </div>
  );
}

export default AddImageButton;
