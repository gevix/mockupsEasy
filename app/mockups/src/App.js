import './App.css';
import React, { useState } from 'react';
import ColorPanel from './components/ColorPanel';
import ThreeJSApp from './components/ThreeJSApp';


function App() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

  const changeColor = (color) => {
    setHsva(color);
  }

  return (
    <div className="container">
      <div>
        <ThreeJSApp color = {hsva} changeMockupAreaColor = {changeColor}/>
      </div>
      <div className='color-panel'>
        <ColorPanel hsva={hsva} setHsva={setHsva} />
      </div>
    </div>
  );
}

export default App;
