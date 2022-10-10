import React from 'react';
import {ViroBox} from '@viro-community/react-viro';

const ARBox = ({clickHandler, materials}) => {
  return (
    <ViroBox
      height={2}
      length={2}
      width={2}
      scale={[0.05, 0.05, 0.05]}
      materials={materials}
      onClick={clickHandler}
    />
  );
};

export default ARBox;
