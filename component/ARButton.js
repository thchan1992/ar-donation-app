import React from 'react';

import {ViroButton} from '@viro-community/react-viro';

const ARButton = ({position, buttonPic, navDest, paramObj, navigation}) => {
  return (
    <ViroButton
      source={buttonPic}
      position={position}
      height={0.1}
      width={0.2}
      onClick={() => {
        navigation.navigate(navDest, paramObj);
      }}
    />
  );
};

export default ARButton;
