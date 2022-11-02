import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  Viro360Image,
} from '@viro-community/react-viro';
import ARButton from '../component/ARButton';
import ARBox from '../component/ARBox';
import {tracking} from '../util/arTrackingTarget';
import {boxMaterials} from '../util/boxMaterials';
import {charityList, beneficiaryList} from '../data/charityData';

const ARScreen = ({navigation}) => {
  const ARScene = () => {
    const [beneList, setBeneList] = useState([]);
    const [showCharity, setShowCharity] = useState([]);
    const [charityOpt, setCharityOpt] = useState([]);
    const [showButton, setShowButton] = useState([]);

    useEffect(() => {
      var lowEnd = -4;
      var highEnd = 0;
      var yVal = [];
      while (lowEnd <= highEnd) {
        yVal.push((lowEnd += 2));
      }
      const result = [];
      const result2 = [];
      const result3 = [];
      const result4 = [];

      beneficiaryList().map((obj, index) => {
        result.push({
          beneficiary: obj.beneficiary,
          y: yVal[index],
        });
        result2.push(false);
        result3.push(
          charityList.filter(char => {
            return char.beneficiary.beneficiary == obj.beneficiary;
          }),
        );
        const arr = [];
        charityList.map(char => {
          if (char.beneficiary.beneficiary == obj.beneficiary) {
            arr.push(false);
          }
        });
        result4.push(arr);
      });
      //bene list
      setBeneList(result);
      //whether show charity or not
      setShowCharity(result2);
      // charity opt list
      setCharityOpt(result3);
      // whether show the button or not
      setShowButton(result4);
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
        beneficiaryList().map(obj => {
          const arr = [];
          charityList.map(char => {
            if (char.beneficiary.beneficiary == obj.beneficiary) {
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
              <Viro360Image source={require('../assets/background.png')} />
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
                          materials={char.name}
                          position={[index - 1, obj.y + 0.7, -4]}
                        />
                        {showButton[i][index] === true && (
                          <>
                            <ARButton
                              position={[index - 1.5, obj.y + 1.2, -4]}
                              buttonPic={require('../assets/donate-button.png')}
                              navDest={'donate'}
                              paramObj={{charity: charityOpt[i][index]}}
                              navigation={navigation}
                            />
                            <ARButton
                              position={[index - 0.5, obj.y + 1.2, -4]}
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
