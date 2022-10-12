import {ViroMaterials} from '@viro-community/react-viro';

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
  orphan: {diffuseTexture: require('../assets/orphan.png')},
  orphansInNeed: {
    diffuseTexture: require('../assets/orphans-in-need.png'),
  },
  refugee: {diffuseTexture: require('../assets/refugees.png')},
  redCross: {diffuseTexture: require('../assets/redCross.jpeg')},
  textBackground: {diffuseTexture: require('../assets/background.png')},
});
