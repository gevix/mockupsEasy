import React from "react";
import { useState } from "react";
import PixiJSApp from "./PixiJSApp";
import CenterVerticallyButton from "./CenterVerticallyButton";
import CenterHorizontallyButton from "./CenterHorizontallyButton";
import SizeBar from "./SizeBar";
import AddImageButton from "./AddImageButton";

function ImageEditor({ onTextureImage }) {
  const [isCenterVertically, setIsCenterVertically] = useState(true);
  const [isCenterHorizontally, setIsCenterHorizontally] = useState(true);
  const [size, setSize] = useState(50);
  const [image, setImage] = useState("./img/textureImage.png");


  return (
    <div>
      <div>
        <PixiJSApp
          size={size}
          isCenterHorizontally={isCenterHorizontally}
          isCenterVertically={isCenterVertically}
          image={image}
          onTextureImage={onTextureImage}
        />
      </div>
      <div>
        <CenterVerticallyButton
          setIsCenterVertically={setIsCenterVertically}
        />
        <CenterHorizontallyButton
          setIsCenterHorizontally={setIsCenterHorizontally}
        />
        <SizeBar size={size} setSize={setSize} />
        <AddImageButton setImage={setImage}/>
      </div>
    </div>
  );
}

export default ImageEditor;
