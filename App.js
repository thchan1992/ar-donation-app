import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
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
  ViroARCamera,
} from '@viro-community/react-viro';
import {StateContext} from './context';
import StateContextProvider from './context';

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
  const [showHomeDet, setShowHomeDet] = useState(false);
  const ctx = useContext(StateContext);
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
    setX_home(position[0]);
    setY_home(position[1]);
    setZ_home(position[2]);
    setShowHomeOpt(true);
    setShowOrphansOpt(false);
    setShowReOpt(false);
    setHomeMaterials(['shelter']);
    setOrphansMaterials(['orphan']);
    setReMaterials(['refugee']);
  };

  const clickOrphansHandler = (position, source) => {
    setX_or(position[0]);
    setY_or(position[1]);
    setZ_or(position[2]);
    setShowHomeOpt(false);
    setShowOrphansOpt(true);
    setShowReOpt(false);
    setHomeMaterials(['homeless']);
    setOrphansMaterials(['orphansInNeed']);
    setReMaterials(['refugee']);
  };

  const clickReHandler = (position, source) => {
    setX_re(position[0]);
    setY_re(position[1]);
    setZ_re(position[2]);
    setShowHomeOpt(false);
    setShowOrphansOpt(false);
    setShowReOpt(true);
    setHomeMaterials(['homeless']);
    setOrphansMaterials(['orphan']);
    setReMaterials(['redCross']);
  };

  return (
    <ViroARScene>
      <ViroARImageMarker target="homeless">
        <>
          {!showHomeDet && (
            <ViroBox
              height={2}
              length={2}
              width={2}
              scale={[0.05, 0.05, 0.05]}
              materials={homelessMaterials}
              onClick={clickHomelessHandler}
            />
          )}
          {showHomeOpt && !showHomeDet && (
            <>
              <ViroButton
                source={require('./asset/donate-button.png')}
                position={[x_home, y_home + 0.3, z_home]}
                height={0.1}
                width={0.2}
                onTap={this._onButtonTap}
              />
              <ViroButton
                source={require('./asset/detail-button.png')}
                position={[x_home, y_home + 0.5, z_home]}
                height={0.1}
                width={0.2}
                onTap={this._onButtonTap}
                onClick={() => {
                  setShowHomeDet(true);
                  ctx.detail();
                }}
              />
            </>
          )}
        </>
      </ViroARImageMarker>
      {showHomeDet && (
        <ViroARCamera>
          <ViroButton
            source={require('./asset/back-button.png')}
            position={[0, 3, -6.1]}
            height={0.5}
            width={1}
            onTap={this._onButtonTap}
            onClick={() => {
              setShowHomeDet(false);
              setShowHomeOpt(true);
            }}
          />
          <ViroText
            position={[0, 0, -6]}
            text={
              'Shelter is a registered charity that campaigns for tenant rights in Great Britain. \n\nIt gives advice, information and advocacy to people and lobbyies government and local authorities for new laws and policies. \n\nIt works in partnership with Shelter Cymru in Wales and the Housing Rights Service in Northern Ireland.'
            }
            width={2}
            height={2}
            style={{
              fontFamily: 'Arial',
              fontSize: 13,
              fontWeight: 'bold',
              color: '#0000FF',
            }}
            textAlign="center"
          />
          <ViroButton
            source={require('./asset/background.png')}
            position={[0, 0, -6.2]}
            height={5}
            width={2.5}
            onTap={this._onButtonTap}
            onClick={() => {
              setShowHomeDet(true);
            }}
          />
        </ViroARCamera>
      )}
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
          {showOrphansOpt && (
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
          {showReOpt && (
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

export default () => {
  const ctx = useContext(StateContext);

  useEffect;
  return (
    <StateContextProvider>
      <View style={{flex: 1}}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            scene: HelloWorldSceneAR,
          }}
          style={styles.f1}
        />
        {ctx.showDetail && <View style={styles.controlsView}></View>}
      </View>
    </StateContextProvider>
  );
};

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
