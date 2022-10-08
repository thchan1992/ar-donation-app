import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroButton,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  const [scence, setScence] = useState('');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    // if (state === ViroConstants.TRACKING_NORMAL) {
    setText('Hello World!');
    // } else if (state === ViroConstants.TRACKING_NONE) {
    //   // Handle loss of tracking
    // }
  }
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroButton
        source={require('./asset/homeless.png')}
        position={[1, 0, -3]}
        height={0.5}
        width={1}
        onClick={() => {
          setScence('homeless');
        }}
      />
      {scence == 'homeless' && (
        <ViroText
          text={'We suggestion shelter'}
          position={[1, 0.5, -3]}
          style={{color: 'red'}}
        />
      )}
      <ViroButton
        source={require('./asset/refugees.png')}
        position={[0, 0, -3]}
        height={0.5}
        width={1}
        onTap={this._onButtonTap}
        onClick={() => {
          setScence('refugees');
        }}
      />
      {scence == 'refugees' && (
        <ViroText
          text={'We suggestion refugee action'}
          position={[0, 0.5, -3]}
          style={{color: 'red'}}
        />
      )}
      <ViroButton
        source={require('./asset/orphan.png')}
        position={[-1, 0, -3]}
        height={0.5}
        width={1}
        onTap={this._onButtonTap}
        onClick={() => {
          setScence('orphan');
        }}
      />
      {scence == 'orphan' && (
        <ViroText
          text={'We suggestion Orphans in Need'}
          position={[-1, 0.5, -3]}
          style={{color: 'red'}}
        />
      )}
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
