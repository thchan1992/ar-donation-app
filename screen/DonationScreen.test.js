import React from 'react';
import {create} from 'react-test-renderer';
import ReceiptScreen from './ReceiptScreen';

describe('ReceiptScreen', () => {
  const navigation = {
    replace: jest.fn(),
  };

  it('navigates to AR screen on press of Done button', () => {
    const route = {
      params: {
        charity: {name: 'Test Charity'},
        donateAmount: 10,
      },
    };
    const tree = create(
      <ReceiptScreen navigation={navigation} route={route} />,
    ).root;
    const instance = tree.findByProps({testID: 'doneButton'});
    instance.props.onPress();
    expect(navigation.replace).toHaveBeenCalledWith('AR');
  });
});
