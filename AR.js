import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroARSceneNavigator,
  ViroBox,
  ViroButton,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroMaterials,
  ViroARCamera,
} from '@viro-community/react-viro';

const AR = ({navigation}) => {
  const HelloWorldSceneAR = () => {
    const [showHomeOpt, setShowHomeOpt] = useState(false);
    const [showOrphansOpt, setShowOrphansOpt] = useState(false);
    const [showReOpt, setShowReOpt] = useState(false);
    const [x_home, setX_home] = useState(0);
    const [y_home, setY_home] = useState(0);
    const [z_home, setZ_home] = useState(0);
    const [x_or, setX_or] = useState(0);
    const [y_or, setY_or] = useState(0);
    const [z_or, setZ_or] = useState(0);
    const [x_re, setX_re] = useState(0);
    const [y_re, setY_re] = useState(0);
    const [z_re, setZ_re] = useState(0);
    const [homelessMaterials, setHomeMaterials] = useState(['homeless']);
    const [orphansMaterials, setOrphansMaterials] = useState(['orphan']);
    const [reMaterials, setReMaterials] = useState(['refugee']);
    // const [showHomeDet, setShowHomeDet] = useState(false);
    const [scene, setScene] = useState(0);

    ViroARTrackingTargets.createTargets({
      homeless: {
        source: require('./asset/homeless.png'),
        orietntation: 'Up',
        physicalWidth: 0.165,
      },
      orphan: {
        source: require('./asset/orphan.png'),
        orietntation: 'Up',
        physicalWidth: 0.165,
      },
      refugee: {
        source: require('./asset/refugees.png'),
        orietntation: 'Up',
        physicalWidth: 0.165,
      },
    });

    ViroMaterials.createMaterials({
      homeless: {
        diffuseTexture: require('./asset/homeless.png'),
      },
      detail: {
        diffuseTexture: require('./asset/detail-button.png'),
      },
      shelter: {
        diffuseTexture: require('./asset/shelter.png'),
      },
      orphan: {diffuseTexture: require('./asset/orphan.png')},
      orphansInNeed: {
        diffuseTexture: require('./asset/orphans-in-need.png'),
      },
      refugee: {diffuseTexture: require('./asset/refugees.png')},
      redCross: {diffuseTexture: require('./asset/redCross.jpeg')},
      textBackground: {diffuseTexture: require('./asset/background.png')},
    });

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
      setX_or(position[0]);
      setY_or(position[1]);
      setZ_or(position[2]);
      setHomeMaterials(['homeless']);
      setOrphansMaterials(['orphansInNeed']);
      setReMaterials(['refugee']);
    };

    const clickReHandler = (position, source) => {
      setScene(3);
      setX_re(position[0]);
      setY_re(position[1]);
      setZ_re(position[2]);
      setHomeMaterials(['homeless']);
      setOrphansMaterials(['orphan']);
      setReMaterials(['redCross']);
    };

    return (
      <ViroARScene>
        <ViroARImageMarker target="homeless">
          <>
            <ViroBox
              height={2}
              length={2}
              width={2}
              scale={[0.05, 0.05, 0.05]}
              materials={homelessMaterials}
              onClick={clickHomelessHandler}
            />
            {scene == 1 && (
              <>
                <ViroButton
                  source={require('./asset/donate-button.png')}
                  position={[x_home, y_home + 0.3, z_home]}
                  height={0.1}
                  width={0.2}
                  onTap={this._onButtonTap}
                  onClick={() => {
                    navigation.navigate('donate', {
                      charityName: 'shelter',
                    });
                  }}
                />
                <ViroButton
                  source={require('./asset/detail-button.png')}
                  position={[x_home, y_home + 0.5, z_home]}
                  height={0.1}
                  width={0.2}
                  onTap={this._onButtonTap}
                  onClick={() => {
                    navigation.navigate('DetailScreen', {detail: 'detail'});
                  }}
                />
              </>
            )}
          </>
        </ViroARImageMarker>
        <ViroARImageMarker target="orphan">
          <>
            <ViroBox
              height={2}
              length={2}
              width={2}
              scale={[0.05, 0.05, 0.05]}
              materials={orphansMaterials}
              onClick={clickOrphansHandler}
            />
            {scene == 2 && (
              <>
                <ViroButton
                  source={require('./asset/donate-button.png')}
                  position={[x_or + 0.15, y_or + 0.5, z_or]}
                  height={0.1}
                  width={0.2}
                  onTap={this._onButtonTap}
                />
                <ViroButton
                  source={require('./asset/detail-button.png')}
                  position={[x_or - 0.15, y_or + 0.5, z_or]}
                  height={0.1}
                  width={0.2}
                  onTap={this._onButtonTap}
                />
              </>
            )}
          </>
        </ViroARImageMarker>
        <ViroARImageMarker target="refugee">
          <>
            <ViroBox
              height={2}
              length={2}
              width={2}
              scale={[0.05, 0.05, 0.05]}
              materials={reMaterials}
              onClick={clickReHandler}
            />
            {scene == 3 && (
              <>
                <ViroButton
                  source={require('./asset/donate-button.png')}
                  position={[x_re + 0.15, y_re + 0.5, z_re]}
                  height={0.1}
                  width={0.2}
                  onTap={this._onButtonTap}
                />
                <ViroButton
                  source={require('./asset/detail-button.png')}
                  position={[x_re - 0.15, y_re + 0.5, z_re]}
                  height={0.1}
                  width={0.2}
                  onTap={this._onButtonTap}
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
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />
    </View>
  );
};

export default AR;

var styles = StyleSheet.create({
  f1: {flex: 1},
  controlsView: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
