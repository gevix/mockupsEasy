import React, { useState } from 'react';
import ColorPanel from './ColorPanel';
import ThreeJSApp from './ThreeJSApp';
import ImageEditor from './ImageEditor';


function Constructor() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [textureImage, setTextureImage] = useState(null);

  const handleSetTexutreImage = (textureImage) => {
    setTextureImage(textureImage);
  };

  return (
    <div className="container">
      <div>
       <ImageEditor onTextureImageChange={handleSetTexutreImage}/>
        </div>
      <div>
        <ThreeJSApp color = {hsva} textureImage ={textureImage} />
      </div>
      <div className='color-panel'>
        <ColorPanel hsva={hsva} setHsva={setHsva} />
      </div>
    </div>
  );
}

export default Constructor;
