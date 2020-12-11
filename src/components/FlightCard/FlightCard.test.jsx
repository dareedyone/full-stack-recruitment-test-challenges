import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './FlightCard';

describe('FlightCard', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<FlightCard />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FlightCard />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
