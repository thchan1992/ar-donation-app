import {ViroMaterials} from '@viro-community/react-viro';
import {charityList} from '../data/charityData';

export const boxMaterials = ViroMaterials.createMaterials({
  detail: {
    diffuseTexture: require('../assets/detail-button.png'),
  },
  textBackground: {diffuseTexture: require('../assets/background.png')},
  disabled: {
    diffuseTexture: require('../assets/disabled.jpeg'),
  },
  'wild animal': {
    diffuseTexture: require('../assets/wildAnimal.jpeg'),
  },
  'cancer patient': {diffuseTexture: require('../assets/cancerPatient.jpeg')},
  scope: {diffuseTexture: require('../assets/scope.png')},
  'sight savers': {diffuseTexture: require('../assets/sightSavers.png')},
  'leonard cheshire disability': {
    diffuseTexture: require('../assets/leonard.jpeg'),
  },
  'world society': {
    diffuseTexture: require('../assets/worldAnimalProtection.png'),
  },
  'green peace': {diffuseTexture: require('../assets/greenPeace.jpeg')},
  'campaign against climate change': {
    diffuseTexture: require('../assets/campaignClimate.jpeg'),
  },
  "children's tumor foundation": {
    diffuseTexture: require('../assets/childrenBrain.jpeg'),
  },
  'young lives vs cancer': {
    diffuseTexture: require('../assets/youngLives.png'),
  },
  'anthony nolan': {diffuseTexture: require('../assets/anthonyNolan.jpeg')},

  // 'orphans in need': {
  //   diffuseTexture: require('../assets/orphans-in-need.png'),
  // },
  // refugee: {diffuseTexture: require('../assets/refugees.png')},
  // 'red cross': {diffuseTexture: require('../assets/redCross.jpeg')},
});

// export const box = () => {
//   // //charity material
//   // let material = ViroMaterials.createMaterials({});
//   // for (let i = 0; i < charityList.length; i++) {
//   //   let varName = 'material';
//   //   eval(varName);
//   //   material[charityList[i].name] = {diffuseTexture: charityList[i].imageUrl};
//   // }
//   // console.log(material);
//   // // console.log(ViroMaterials.createMaterials({material}));
//   // // return ViroMaterials.createMaterials({material});
// };
