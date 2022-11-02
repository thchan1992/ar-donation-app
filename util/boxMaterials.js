import {ViroMaterials} from '@viro-community/react-viro';
import {charityList} from '../data/charityData';

export const boxMaterials = ViroMaterials.createMaterials({
  homeless: {
    diffuseTexture: require('../assets/homeless.png'),
  },
  detail: {
    diffuseTexture: require('../assets/detail-button.png'),
  },
  shelter: {
    diffuseTexture: require('../assets/shelter.png'),
  },
  orphans: {diffuseTexture: require('../assets/orphan.png')},
  'orphans in need': {
    diffuseTexture: require('../assets/orphans-in-need.png'),
  },
  refugee: {diffuseTexture: require('../assets/refugees.png')},
  'red cross': {diffuseTexture: require('../assets/redCross.jpeg')},
  textBackground: {diffuseTexture: require('../assets/background.png')},
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
