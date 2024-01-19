import './App.css';
import React, { useState } from 'react';
import ColorWheel from './components/ColorWheel';
import LightSliders from './components/LightSliders';
import ThreeJSApp from './components/ThreeJSApp';

function App() {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0, z: 0 });

  const handleSliderChange = (newLightPosition) => {
    setLightPosition(newLightPosition);
  };

  return (
    <div className="">
      <div className=''>
        <ThreeJSApp lightPosition={lightPosition} />
        </div>
        <div>
        <LightSliders onSliderChange={handleSliderChange} />
        <ColorWheel />
        </div>
    </div>
  );
}

export default App;
