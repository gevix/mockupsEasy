import React, { Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import Block from '@uiw/react-color-block';


function ColorPanel({ hsva, setHsva }) {
  return (
    <Fragment>
      <Block color={hsva} onChange={(color) => setHsva({...hsva, ...color.hsva})} />
      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
      <ShadeSlider
        hsva={hsva}
        style={{ width: 210, marginTop: 20 }}
        onChange={(newShade) => {
          setHsva({ ...hsva, ...newShade });
        }}
      />
    </Fragment>
  );
}

export default ColorPanel;