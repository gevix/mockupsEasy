import React, { useState } from "react";

function LightSliders({ onSliderChange }) {
  const [x, setX] = useState(18);
  const [y, setY] = useState(9);
  const [z, setZ] = useState(21);

  const handleSliderChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case 'light-slider-x':
        setX(value);
        break;
      case 'light-slider-y':
        setY(value);
        break;
      case 'light-slider-z':
        setZ(value);
        break;
      default:
        break;
    }

    onSliderChange({ x, y, z });
  };

  return (
    <div id="controls">
      <div>
        <label htmlFor="light-slider-x">Light X</label>
        <input type="range" id="light-slider-x" min="-50" max="50" value={x} onChange={handleSliderChange} />
      </div>
      <div>
        <label htmlFor="light-slider-y">Light Y</label>
        <input type="range" id="light-slider-y" min="-50" max="50" value={y} onChange={handleSliderChange} />
      </div>
      <div>
        <label htmlFor="light-slider-z">Light Z</label>
        <input type="range" id="light-slider-z" min="-50" max="50" value={z} onChange={handleSliderChange} />
      </div>
    </div>
  );
}

export default LightSliders;