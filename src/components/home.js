import React, { Component } from 'react';
import Nav from './nav'

import Start from './start'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
        <Start />
        </div>
      </div>


    );
  }
}
