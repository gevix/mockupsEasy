import React from "react";
import { useState } from "react";
import PixiJSApp from "./PixiJSApp";
import CenterVerticallyButton from "./CenterVerticallyButton";
import CenterHorizontallyButton from "./CenterHorizontallyButton";
import SizeBar from "./SizeBar";
import AddImageButton from "./AddImageButton";

function ImageEditor({
  onTextureImageChange,
  designImage,
  templateImage,
  imageHeight,
  imageWidth,
}) {
  const [isCenterVertically, setIsCenterVertically] = useState(true);
  const [isCenterHorizontally, setIsCenterHorizontally] = useState(true);
  const [size, setSize] = useState(50);
  const [image, setImage] = useState(templateImage);

  return (
    <div className="">
      <div>
        <PixiJSApp
          size={size}
          isCenterHorizontally={isCenterHorizontally}
          isCenterVertically={isCenterVertically}
          image={image}
          onTextureImageChange={onTextureImageChange}
          templateImage={templateImage}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
        />
      </div>
      <div className="flex flex-col space-y-4 p-4 bg-white rounded-md shadow-md">
        <AddImageButton setImage={setImage} />

        <div className="flex justify-between space-x-4">
          <div className="w-1/2">
            <CenterVerticallyButton
              setIsCenterVertically={setIsCenterVertically}
            />
          </div>
          <div className="w-1/2">
            <CenterHorizontallyButton
              setIsCenterHorizontally={setIsCenterHorizontally}
            />
          </div>
        </div>

        <SizeBar size={size} setSize={setSize} />
      </div>
    </div>
  );
}

export default ImageEditor;
