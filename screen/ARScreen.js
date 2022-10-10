import React, {useState} from 'react';
import {View} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroMaterials,
} from '@viro-community/react-viro';
import ARButton from '../component/ARButton';
import ARBox from '../component/ARBox';
import {tracking} from '../util/arTrackingTarget';
import {boxMaterials} from '../util/boxMaterials';

const ARScreen = ({navigation}) => {
  const ARScene = () => {
    const [x_home, setX_home] = useState(0);
    const [y_home, setY_home] = useState(0);
    const [z_home, setZ_home] = useState(0);

    const [homelessMaterials, setHomeMaterials] = useState(['homeless']);
    const [orphansMaterials, setOrphansMaterials] = useState(['orphan']);
    const [reMaterials, setReMaterials] = useState(['refugee']);
    const [scene, setScene] = useState(0);
    tracking;
    boxMaterials;

    const clickHomelessHandler = (position, source) => {
      setScene(1);
      setX_home(position[0]);
      setY_home(position[1]);
      setZ_home(position[2]);
      setHomeMaterials(['shelter']);
      setOrphansMaterials(['orphan']);
      setReMaterials(['refugee']);
    };

    const clickOrphansHandler = (position, source) => {
      setScene(2);
      setX_home(position[0]);
      setY_home(position[1]);
      setZ_home(position[2]);
      setHomeMaterials(['homeless']);
      setOrphansMaterials(['orphansInNeed']);
      setReMaterials(['refugee']);
    };

    const clickReHandler = (position, source) => {
      setScene(3);
      setX_home(position[0]);
      setY_home(position[1]);
      setZ_home(position[2]);
      setHomeMaterials(['homeless']);
      setOrphansMaterials(['orphan']);
      setReMaterials(['redCross']);
    };

    return (
      <ViroARScene>
        <ViroARImageMarker target="homeless">
          <>
            <ARBox
              clickHandler={clickHomelessHandler}
              materials={homelessMaterials}
            />
            {scene == 1 && (
              <>
                <ARButton
                  position={[x_home, y_home + 0.3, z_home]}
                  buttonPic={require('../asset/donate-button.png')}
                  navDest={'donate'}
                  paramObj={{charityName: 'shelter'}}
                  navigation={navigation}
                />
                <ARButton
                  position={[x_home, y_home + 0.5, z_home]}
                  buttonPic={require('../asset/detail-button.png')}
                  navDest={'DetailScreen'}
                  paramObj={{detail: 'homeless'}}
                  navigation={navigation}
                />
              </>
            )}
          </>
        </ViroARImageMarker>
        <ViroARImageMarker target="orphan">
          <>
            <ARBox
              clickHandler={clickOrphansHandler}
              materials={orphansMaterials}
            />
            {scene == 2 && (
              <>
                <ARButton
                  position={[x_home, y_home + 0.3, z_home]}
                  buttonPic={require('../asset/donate-button.png')}
                  navDest={'donate'}
                  paramObj={{charityName: 'orphansInNeed'}}
                  navigation={navigation}
                />
                <ARButton
                  position={[x_home, y_home + 0.5, z_home]}
                  buttonPic={require('../asset/detail-button.png')}
                  navDest={'DetailScreen'}
                  paramObj={{detail: 'orphans'}}
                  navigation={navigation}
                />
              </>
            )}
          </>
        </ViroARImageMarker>
        <ViroARImageMarker target="refugee">
          <>
            <ARBox clickHandler={clickReHandler} materials={reMaterials} />
            {scene == 3 && (
              <>
                <ARButton
                  position={[x_home, y_home + 0.3, z_home]}
                  buttonPic={require('../asset/donate-button.png')}
                  navDest={'donate'}
                  paramObj={{charityName: 'red cross'}}
                  navigation={navigation}
                />
                <ARButton
                  position={[x_home, y_home + 0.5, z_home]}
                  buttonPic={require('../asset/detail-button.png')}
                  navDest={'DetailScreen'}
                  paramObj={{detail: 'refugee'}}
                  navigation={navigation}
                />
              </>
            )}
          </>
        </ViroARImageMarker>
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

// const [x_or, setX_or] = useState(0);
// const [y_or, setY_or] = useState(0);
// const [z_or, setZ_or] = useState(0);
// const [x_re, setX_re] = useState(0);
// const [y_re, setY_re] = useState(0);
// const [z_re, setZ_re] = useState(0);

// ViroARTrackingTargets.createTargets({
//   homeless: {
//     source: require('../asset/homeless.png'),
//     orietntation: 'Up',
//     physicalWidth: 0.165,
//   },
//   orphan: {
//     source: require('../asset/orphan.png'),
//     orietntation: 'Up',
//     physicalWidth: 0.165,
//   },
//   refugee: {
//     source: require('../asset/refugees.png'),
//     orietntation: 'Up',
//     physicalWidth: 0.165,
//   },
// });

// ViroMaterials.createMaterials({
//   homeless: {
//     diffuseTexture: require('../asset/homeless.png'),
//   },
//   detail: {
//     diffuseTexture: require('../asset/detail-button.png'),
//   },
//   shelter: {
//     diffuseTexture: require('../asset/shelter.png'),
//   },
//   orphan: {diffuseTexture: require('../asset/orphan.png')},
//   orphansInNeed: {
//     diffuseTexture: require('../asset/orphans-in-need.png'),
//   },
//   refugee: {diffuseTexture: require('../asset/refugees.png')},
//   redCross: {diffuseTexture: require('../asset/redCross.jpeg')},
//   textBackground: {diffuseTexture: require('../asset/background.png')},
// });
