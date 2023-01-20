import renderer from 'react-test-renderer';
import React from 'react';
import NumberInput from './NumberInput';

describe('NumberInput', () => {
  let setter;

  beforeEach(() => {
    setter = jest.fn();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NumberInput
          value="123"
          setter={setter}
          placeholder="Test Placeholder"
          height={50}
          maxWidth={200}
          minWidth={150}
          maxLength={5}
          isPound={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls setter when input value changes', () => {
    const component = renderer.create(
      <NumberInput
        value="123"
        setter={setter}
        placeholder="Test Placeholder"
        height={50}
        maxWidth={200}
        minWidth={150}
        maxLength={5}
        isPound={true}
      />,
    );
    const instance = component.root;
    const input = instance.findByType('TextInput');
    input.props.onChangeText('456');
    expect(setter).toHaveBeenCalledWith('456');
  });
});
