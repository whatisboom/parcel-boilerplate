import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

let home;

beforeEach(() => {
  home = shallow(<Home />);
});

describe('<Home /> Container', () => {
  it('renders a single <h1>', () => {
    expect(home.find('h1').length).toEqual(1);
  });
});
