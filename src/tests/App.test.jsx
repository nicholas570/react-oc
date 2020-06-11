import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import GuessCount from '../GuessCount';

// suite
describe('<App />', () => {
  // tests
  it('demo', () => {
    expect({ name: 'fries' }).toEqual({ name: 'fries' });
  });

  // enzyme
  const wrapper = shallow(<App />);
  // jest
  it('renders without crashing', () => {
    // enzyme + jest
    expect(wrapper.contains(<GuessCount guesses={0} />)).toEqual(true);
  });

  it('must not have cards state', () => {
    expect(wrapper.state().guesses).toEqual(0);
  });

  it('must have 36 cards', () => {
    expect(wrapper.find('Card')).toHaveLength(36);
  });
});
