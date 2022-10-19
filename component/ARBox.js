import React from 'react';
import {ViroBox} from '@viro-community/react-viro';

const ARBox = ({clickHandler, materials, position}) => {
  return (
    <ViroBox
      height={1}
      length={1}
      width={1}
      scale={[0.5, 0.5, 0.5]}
      materials={materials}
      onClick={clickHandler}
      position={position}
    />
  );
};

export default ARBox;
