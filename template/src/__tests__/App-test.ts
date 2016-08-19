import React from 'react';
import App from '../components/containers/App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders a welcome view', () => {
    const instance = renderer.create(<App />);
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
