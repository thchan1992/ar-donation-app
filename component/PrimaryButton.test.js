import renderer from 'react-test-renderer';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import {TouchableOpacity, Text} from 'react-native';

describe('PrimaryButton', () => {
  let onPress;

  beforeEach(() => {
    onPress = jest.fn();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<PrimaryButton text="Test Button" onPress={onPress} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress when pressed', () => {
    const component = renderer.create(
      <PrimaryButton text="Test Button" onPress={onPress} />,
    );
    const instance = component.root;
    const button = instance.findByType(TouchableOpacity);
    button.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
