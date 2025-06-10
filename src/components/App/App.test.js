import React from 'react';Add commentMore actions
import App from '../src/components/App/App';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app.node).toMatchSnapshot();
});
