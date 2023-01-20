import React from 'react';
import renderer from 'react-test-renderer';
import DetailScreen from './DetailScreen';

describe('DetailScreen', () => {
  it('renders correctly', () => {
    const charity = {
      name: 'Test Charity',
      info: 'Test charity information.',
    };
    const navigation = {
      navigate: jest.fn(),
    };
    const route = {
      params: {
        charity,
      },
    };
    const tree = renderer
      .create(<DetailScreen route={route} navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
