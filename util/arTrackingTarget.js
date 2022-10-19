import {ViroARTrackingTargets} from '@viro-community/react-viro';

export const tracking = ViroARTrackingTargets.createTargets({
  homeless: {
    source: require('../assets/homeless.png'),
    orietntation: 'Up',
    physicalWidth: 0.1,
  },
  orphan: {
    source: require('../assets/orphan.png'),
    orietntation: 'Up',
    physicalWidth: 0.165,
  },
  refugee: {
    source: require('../assets/refugees.png'),
    orietntation: 'Up',
    physicalWidth: 0.165,
  },
});
