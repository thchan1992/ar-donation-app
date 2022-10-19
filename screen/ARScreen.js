import React, {useState} from 'react';
import {View} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroMaterials,
  ViroBox,
} from '@viro-community/react-viro';
import ARButton from '../component/ARButton';
import ARBox from '../component/ARBox';
import {tracking} from '../util/arTrackingTarget';
import {boxMaterials} from '../util/boxMaterials';
import {selectedCharity} from '../data/charityData';
import AROption from '../component/AROption';

const ARScreen = ({navigation}) => {
  const ARScene = () => {
    const [showCharityOne, setShowCharityOne] = useState(false);
    const [showCharityTwo, setShowCharityTwo] = useState(false);
    const [showCharityThree, setShowCharityThree] = useState(false);
    // const [x_home, setX_home] = useState(0);
    // const [y_home, setY_home] = useState(0);
    // const [z_home, setZ_home] = useState(0);

    // const [homelessMaterials, setHomeMaterials] = useState(['homeless']);
    // const [orphansMaterials, setOrphansMaterials] = useState(['orphan']);
    // const [reMaterials, setReMaterials] = useState(['refugee']);
    // const [scene, setScene] = useState(0);
    tracking;
    boxMaterials;

    // const clickHomelessHandler = (position, source) => {
    //   setScene(1);
    //   setX_home(position[0]);
    //   setY_home(position[1]);
    //   setZ_home(position[2]);
    //   setHomeMaterials(['shelter']);
    //   setOrphansMaterials(['orphan']);
    //   setReMaterials(['refugee']);
    // };

    // const clickOrphansHandler = (position, source) => {
    //   setScene(2);
    //   setX_home(position[0]);
    //   setY_home(position[1]);
    //   setZ_home(position[2]);
    //   setHomeMaterials(['homeless']);
    //   setOrphansMaterials(['orphansInNeed']);
    //   setReMaterials(['refugee']);
    // };

    // const clickReHandler = (position, source) => {
    //   setScene(3);
    //   setX_home(position[0]);
    //   setY_home(position[1]);
    //   setZ_home(position[2]);
    //   setHomeMaterials(['homeless']);
    //   setOrphansMaterials(['orphan']);
    //   setReMaterials(['redCross']);
    // };

    return (
      <ViroARScene>
        <AROption
          beneMaterial={'homeless'}
          x={0}
          y={0}
          z={-4}
          charityMaterial={'shelter'}
          navigation={navigation}
          selectedCharity={selectedCharity('homeless')}
          showChar={showCharityOne}
          clickHandler={() => {
            setShowCharityOne(true);
          }}
        />
        <AROption
          beneMaterial={'orphan'}
          x={0}
          y={3}
          z={-4}
          charityMaterial={'orphansInNeed'}
          navigation={navigation}
          selectedCharity={selectedCharity('orphan')}
          showChar={showCharityTwo}
          clickHandler={() => {
            setShowCharityTwo(true);
          }}
        />
        <AROption
          beneMaterial={'refugee'}
          x={0}
          y={-3}
          z={-4}
          charityMaterial={'redCross'}
          navigation={navigation}
          selectedCharity={selectedCharity('refugee')}
          showChar={showCharityThree}
          clickHandler={() => {
            setShowCharityThree(true);
          }}
        />
      </ViroARScene>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: ARScene,
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

export default ARScreen;

// <ViroBox height={1} length={1} width={1} position={[-2, 0, -6]} />
//         <ARButton
//           position={[-2, 2, -6]}
//           buttonPic={require('../assets/donate-button.png')}
//           navDest={'donate'}
//           paramObj={{charity: selectedCharity('homeless')}}
//           navigation={navigation}
//         />
//         <ARButton
//           position={[-2, 4, -6]}
//           buttonPic={require('../assets/detail-button.png')}
//           navDest={'DetailScreen'}
//           paramObj={{charity: selectedCharity('homeless')}}
//           navigation={navigation}
//         />

//         <ViroBox height={1} length={1} width={1} position={[0, 0, -6]} />

//         <ViroBox height={1} length={1} width={1} position={[2, 0, -6]} />

//         <ViroARImageMarker target="homeless">
//           <>
//             <ARBox
//               clickHandler={clickHomelessHandler}
//               materials={homelessMaterials}
//             />
//             {scene == 1 && (
//               <>
//                 <ARButton
//                   position={[x_home, y_home + 0.3, z_home]}
//                   buttonPic={require('../assets/donate-button.png')}
//                   navDest={'donate'}
//                   paramObj={{charity: selectedCharity('homeless')}}
//                   navigation={navigation}
//                 />
//                 <ARButton
//                   position={[x_home, y_home + 0.5, z_home]}
//                   buttonPic={require('../assets/detail-button.png')}
//                   navDest={'DetailScreen'}
//                   paramObj={{charity: selectedCharity('homeless')}}
//                   navigation={navigation}
//                 />
//               </>
//             )}
//           </>
//         </ViroARImageMarker>
//         <ViroARImageMarker target="orphan">
//           <>
//             <ARBox
//               clickHandler={clickOrphansHandler}
//               materials={orphansMaterials}
//             />
//             {scene == 2 && (
//               <>
//                 <ARButton
//                   position={[x_home, y_home + 0.3, z_home]}
//                   buttonPic={require('../assets/donate-button.png')}
//                   navDest={'donate'}
//                   paramObj={{charity: selectedCharity('orphan')}}
//                   navigation={navigation}
//                 />
//                 <ARButton
//                   position={[x_home, y_home + 0.5, z_home]}
//                   buttonPic={require('../assets/detail-button.png')}
//                   navDest={'DetailScreen'}
//                   paramObj={{charity: selectedCharity('orphan')}}
//                   navigation={navigation}
//                 />
//               </>
//             )}
//           </>
//         </ViroARImageMarker>
//         <ViroARImageMarker target="refugee">
//           <>
//             <ARBox clickHandler={clickReHandler} materials={reMaterials} />
//             {scene == 3 && (
//               <>
//                 <ARButton
//                   position={[x_home, y_home + 0.3, z_home]}
//                   buttonPic={require('../assets/donate-button.png')}
//                   navDest={'donate'}
//                   paramObj={{charity: selectedCharity('refugee')}}
//                   navigation={navigation}
//                 />
//                 <ARButton
//                   position={[x_home, y_home + 0.5, z_home]}
//                   buttonPic={require('../assets/detail-button.png')}
//                   navDest={'DetailScreen'}
//                   paramObj={{charity: selectedCharity('refugee')}}
//                   navigation={navigation}
//                 />
//               </>
//             )}
//           </>
//         </ViroARImageMarker>
