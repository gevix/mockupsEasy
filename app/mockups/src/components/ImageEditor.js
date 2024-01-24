import React from "react";
import { useState } from "react";

function ImageEditor() {
    const [isCenterVertically, setIsCenterVertically] = useState(true);
    const [isCenterHorizontally, setIsCenterHorizontally] = useState(true);
    const [size, setSize] = useState(100);
    const [image, setImage] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isLooksGood, setIsLooksGood] = useState(false);

  return (
    <div>
    <div>
      <pixiJSApp />
    </div>
    <div>
      <centerVerticallyButton />
      <centerHorizontallyButton />
      <sizeBar />
      <addImageButton />
      <looksGoodButton />
      </div>
    </div>
  );
}

export default ImageEditor;