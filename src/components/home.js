import React, { Component } from 'react';
import Nav from './nav'

import Start from './start'
import Button from './button';

export default class Home extends Component {
  render() {
    return (

      <div>

        <Nav />
        <div>       
        <Start />

        <Button/>
        </div>
        </div>
  


    );
  }
}
