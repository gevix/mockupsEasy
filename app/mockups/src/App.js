import './App.css';
import React, { useState } from 'react';
import ColorPanel from './components/ColorPanel';
import ThreeJSApp from './components/ThreeJSApp';
import ImageEditor from './components/ImageEditor';


function App() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [textureImage, setTextureImage] = useState(null);

  return (
    <div className="container">
      <div>
       <ImageEditor setTextureImage={setTextureImage}/>
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
