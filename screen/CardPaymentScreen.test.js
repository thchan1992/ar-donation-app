import renderer from 'react-test-renderer';
import React from 'react';
import CardDetailScreen from './CardPaymentScreen';
import NumberInput from '../component/NumberInput';
import PrimaryButton from '../component/PrimaryButton';
import {Alert} from 'react-native';

describe('CardDetailScreen', () => {
  let navigation;
  let route;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
    route = {
      params: {
        charity: {
          name: 'Test Charity',
          imageUrl: require('../assets/anthonyNolan.jpeg'),
        },
        donateAmount: 50,
      },
    };
    jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  });

  it('calls navigate when payment is successful', () => {
    const component = renderer.create(
      <CardDetailScreen navigation={navigation} route={route} />,
    );
    const instance = component.root;
    const cardNumInput = instance.find(
      node =>
        node.type === NumberInput && node.props.placeholder === 'Card Number',
    );
    cardNumInput.props.setter('1111111111111111');
    const cvvInput = instance.find(
      node => node.type === NumberInput && node.props.placeholder === 'CVV',
    );
    cvvInput.props.setter('111');
    const expDateInput = instance.find(
      node =>
        node.type === NumberInput && node.props.placeholder === 'EXP DATE',
    );
    expDateInput.props.setter('11/11');
    const confirmButton = instance.find(
      node => node.type === PrimaryButton && node.props.text === 'Confirm',
    );
    confirmButton.props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith(
      'ReceiptScreen',
      route.params,
    );
  });

  it('shows an alert when payment is not successful', () => {
    const component = renderer.create(
      <CardDetailScreen navigation={navigation} route={route} />,
    );
    const instance = component.root;
    const cardNumInput = instance.find(
      node =>
        node.type === NumberInput && node.props.placeholder === 'Card Number',
    );
    cardNumInput.props.setter('1111111111111');
    const cvvInput = instance.find(
      node => node.type === NumberInput && node.props.placeholder === 'CVV',
    );
    cvvInput.props.setter('111');

    const expDateInput = instance.find(
      node =>
        node.type === NumberInput && node.props.placeholder === 'EXP DATE',
    );

    expDateInput.props.setter('11/11');
    const confirmButton = instance.find(
      node => node.type === PrimaryButton && node.props.text === 'Confirm',
    );
    confirmButton.props.onPress();
    // check if alert is shown
    expect(Alert.alert).toHaveBeenCalled();
  });
});
