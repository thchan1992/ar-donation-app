import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroButton,
  Viro360Image,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroMaterials,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [showOpt, setShowOpt] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [materials, setMaterials] = useState(['homeless']);

  ViroARTrackingTargets.createTargets({
    homeless: {
      source: require('./asset/homeless.png'),
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
  });

  const clickHandler = (position, source) => {
    setX(position[0]);
    setY(position[1]);
    setZ(position[2]);
    setShowOpt(true);
    setMaterials(['shelter']);
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
            materials={materials}
            onClick={clickHandler}
          />
          {showOpt && (
            <>
              <ViroButton
                source={require('./asset/donate-button.png')}
                position={[x + 0.15, y + 0.5, z]}
                height={0.1}
                width={0.2}
                onTap={this._onButtonTap}
              />
              <ViroButton
                source={require('./asset/detail-button.png')}
                position={[x - 0.15, y + 0.5, z]}
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

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

{
  /*
<ViroButton
  source={require('./asset/refugees.png')}
  position={[0, 0, -3]}
  height={0.5}
  width={1}
  onTap={this._onButtonTap}
  onClick={() => {
    setScence('refugees');
  }}
/>;
{
  scence == 'refugees' && (
    <ViroText
      text={'We suggestion refugee action'}
      position={[0, 0.5, -3]}
      style={{color: 'red'}}
    />
  );
}
<ViroButton
  source={require('./asset/orphan.png')}
  position={[-1, 0, -3]}
  height={0.5}
  width={1}
  onTap={this._onButtonTap}
  onClick={() => {
    setScence('orphan');
  }}
/>;
{
  scence == 'orphan' && (
    <ViroText
      text={'We suggestion Orphans in Need'}
      position={[-1, 0.5, -3]}
      style={{color: 'red'}}
    />
  );
}

*/
}
