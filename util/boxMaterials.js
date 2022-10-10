import {ViroMaterials} from '@viro-community/react-viro';

export const boxMaterial = ViroMaterials.createMaterials({
  homeless: {
    diffuseTexture: require('../asset/homeless.png'),
  },
  detail: {
    diffuseTexture: require('../asset/detail-button.png'),
  },
  shelter: {
    diffuseTexture: require('../asset/shelter.png'),
  },
  orphan: {diffuseTexture: require('../asset/orphan.png')},
  orphansInNeed: {
    diffuseTexture: require('../asset/orphans-in-need.png'),
  },
  refugee: {diffuseTexture: require('../asset/refugees.png')},
  redCross: {diffuseTexture: require('../asset/redCross.jpeg')},
  textBackground: {diffuseTexture: require('../asset/background.png')},
});
