import React, {useEffect, useState, useCallback} from 'react';
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
import {
  charityList,
  selectedCharity,
  beneficiaryList,
} from '../data/charityData';
import AROption from '../component/AROption';

const ARScreen = ({navigation}) => {
  const ARScene = () => {
    const [beneList, setBeneList] = useState([]);
    const [showCharity, setShowCharity] = useState([]);
    const [charityOpt, setCharityOpt] = useState([]);
    const [showButton, setShowButton] = useState([]);

    useEffect(() => {
      var lowEnd = -6;
      var highEnd = 0;
      var yVal = [];
      while (lowEnd <= highEnd) {
        yVal.push((lowEnd += 3));
      }
      const result = [];
      const result2 = [];
      const result3 = [];
      const result4 = [];

      beneficiaryList.map((obj, index) => {
        result.push({
          beneficiary: obj,
          y: yVal[index],
        });
        result2.push(false);
        result3.push(
          charityList.filter(char => {
            // char.show = false;

            return char.beneficiary == obj;
          }),
        );
        const arr = [];
        charityList.map(char => {
          if (char.beneficiary == obj) {
            arr.push(false);
          }
        });
        result4.push(arr);
      });

      setShowButton(result4);
      setCharityOpt(result3);
      setBeneList(result);
      setShowCharity(result2);
    }, []);
    tracking;
    boxMaterials;

    const showCharHandler = i => {
      setShowCharity(prev => {
        const newState = prev.map(obj => {
          obj = false;
        });
        return newState;
      });

      setShowCharity(prev => {
        const newState = [...prev];
        newState[i] = true;
        return newState;
      });
    };

    const showOptHandler = (i, index) => {
      setShowButton(prev => {
        const result = [];
        beneficiaryList.map(obj => {
          const arr = [];
          charityList.map(char => {
            if (char.beneficiary == obj) {
              arr.push(false);
            }
          });
          result.push(arr);
        });
        return result;
      });

      setShowButton(prev => {
        const newState = [...prev];
        newState[i][index] = true;
        return newState;
      });
    };
    return (
      <ViroARScene>
        {beneList.map((obj, i) => {
          return (
            <>
              <ARBox
                key={obj.beneficiary}
                clickHandler={() => {
                  showCharHandler(i);
                }}
                materials={obj.beneficiary}
                position={[0, obj.y, -4]}
              />
              {showCharity[i] === true && (
                <>
                  {charityOpt[i].map((char, index) => {
                    return (
                      <>
                        <ARBox
                          key={char.name}
                          clickHandler={() => {
                            showOptHandler(i, index);
                          }}
                          materials={char.beneficiary}
                          position={[index - 1, obj.y + 1, -4]}
                        />
                        {showButton[i][index] === true && (
                          <>
                            <ARButton
                              position={[index - 1.5, obj.y + 2, -4]}
                              buttonPic={require('../assets/donate-button.png')}
                              navDest={'donate'}
                              paramObj={{charity: charityOpt[i][index]}}
                              navigation={navigation}
                            />
                            <ARButton
                              position={[index - 0.5, obj.y + 2, -4]}
                              buttonPic={require('../assets/detail-button.png')}
                              navDest={'DetailScreen'}
                              paramObj={{
                                charity: charityOpt[i][index],
                              }}
                              navigation={navigation}
                            />
                          </>
                        )}
                      </>
                    );
                  })}
                </>
              )}
            </>
          );
        })}
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

//  <AROption
//    key={obj.alias}
//    beneMaterial={obj.beneficiary}
//    x={0}
//    y={obj.y}
//    z={-4}
//    charityMaterial={obj.alias}
//    navigation={null}
//    selectedCharity={null}
//    showCharity={null}
//    clickHandler={() => {
//      // setShowCharityOne(true);
//      console.log('pressed');
//    }}
//  />;
