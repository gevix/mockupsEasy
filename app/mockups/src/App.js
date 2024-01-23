import './App.css';
import React, { useState } from 'react';
import ColorWheel from './components/ColorWheel';
import ThreeJSApp from './components/ThreeJSApp';
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <ThreeJSApp />
      </div>
      <div className='color-wheel'>
        <ColorWheel />
      </div>
    </div>
  );
}

export default App;
