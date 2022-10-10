import {ViroARTrackingTargets} from '@viro-community/react-viro';

export const tracking = ViroARTrackingTargets.createTargets({
  homeless: {
    source: require('../asset/homeless.png'),
    orietntation: 'Up',
    physicalWidth: 0.165,
  },
  orphan: {
    source: require('../asset/orphan.png'),
    orietntation: 'Up',
    physicalWidth: 0.165,
  },
  refugee: {
    source: require('../asset/refugees.png'),
    orietntation: 'Up',
    physicalWidth: 0.165,
  },
});
