import React from 'react';
import { mount } from 'enzyme';
import Home from './home';

let home;

beforeEach(() => {
  home = mount(<Home />);
});

describe('<Home /> Container', () => {
  it('renders a single <div>', () => {
    expect(home.find('div').length).toEqual(1);
  });
  it('renders the Heading', () => {
    expect(home.find('h1').length).toEqual(1);
  });
});
