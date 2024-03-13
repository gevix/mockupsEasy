import React from "react";
import { useState } from "react";
import PixiJSApp from "./PixiJSApp";
import CenterVerticallyButton from "./CenterVerticallyButton";
import CenterHorizontallyButton from "./CenterHorizontallyButton";
import SizeBar from "./SizeBar";
import AddImageButton from "./AddImageButton";
import Header from "./Header";

function ImageEditor({ onTextureImageChange, designImage }) {
  const [isCenterVertically, setIsCenterVertically] = useState(true);
  const [isCenterHorizontally, setIsCenterHorizontally] = useState(true);
  const [size, setSize] = useState(50);
  const [image, setImage] = useState(designImage);

  return (
    <div className="">
      <div>
        <div>
          <PixiJSApp
            size={size}
            isCenterHorizontally={isCenterHorizontally}
            isCenterVertically={isCenterVertically}
            image={image}
            onTextureImageChange={onTextureImageChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <CenterVerticallyButton
            setIsCenterVertically={setIsCenterVertically}
          />
          <CenterHorizontallyButton
            setIsCenterHorizontally={setIsCenterHorizontally}
          />
        </div>
        <SizeBar size={size} setSize={setSize} />
        <AddImageButton setImage={setImage} />
      </div>
    </div>
  );
}

export default ImageEditor;
