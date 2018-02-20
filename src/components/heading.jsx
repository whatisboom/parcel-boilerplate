import React, { Component } from 'react';
import { string } from 'prop-types';

export default class Heading extends Component {
  static propTypes = {
    children: string
  }

  render() {
    return <h1>{this.props.children}</h1>;
  }
}
