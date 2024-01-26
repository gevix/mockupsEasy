import './App.css';
import React, { useState } from 'react';
import ColorPanel from './components/ColorPanel';
import ThreeJSApp from './components/ThreeJSApp';
import ImageEditor from './components/ImageEditor';


function App() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [textureImage, setTextureImage] = useState(null);

  const handleSetTextureImage = (dataUrl) => {
    setTextureImage(dataUrl);
  };

  return (
    <div className="container">
      <div>
       <ImageEditor onTextureImage={handleSetTextureImage}/>
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

export default App;
