import React, {useEffect} from 'react';
import ARBox from './ARBox';
import ARButton from './ARButton';

import {selectedCharity} from '../data/charityData';
const AROption = ({
  beneMaterial,
  x,
  y,
  z,
  charityMaterial,
  navigation,
  clickHandler,
  showChar,
}) => {
  return (
    <>
      <ARBox
        clickHandler={clickHandler}
        materials={beneMaterial}
        position={[x, y, z]}
      />
      {showChar && (
        <>
          <ARBox
            clickHandler={() => {}}
            materials={charityMaterial}
            position={[x, y + 0.5, z]}
          />
          <ARButton
            position={[x - 1, y, z]}
            buttonPic={require('../assets/donate-button.png')}
            navDest={'donate'}
            paramObj={{charity: selectedCharity(beneMaterial)}}
            navigation={navigation}
          />
          <ARButton
            position={[x + 1, y, z]}
            buttonPic={require('../assets/detail-button.png')}
            navDest={'DetailScreen'}
            paramObj={{charity: selectedCharity(beneMaterial)}}
            navigation={navigation}
          />
        </>
      )}
    </>
  );
};

export default AROption;
