import React from 'react';
import {ViroBox} from '@viro-community/react-viro';

const ARBox = ({clickHandler, materials, position, index}) => {
  return (
    <ViroBox
      key={index}
      height={1}
      length={1}
      width={1}
      scale={[0.5, 0.5, 0.5]}
      materials={materials}
      onClick={clickHandler}
      position={position}
      animation={{name: 'rotate', loop: true, run: true}}
    />
  );
};

export default ARBox;
