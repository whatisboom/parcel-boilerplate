import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Heading extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return <h1>{this.props.children}</h1>;
  }
}
