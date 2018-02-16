import React, { Component } from 'react';

export default class Heading extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}