import React, { Component } from 'react';
import Nav from './nav'
import ContactButton from './contactButton'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Nav />
        <contactButton />
        <div className="title">
        <h1>My Portfolio</h1>
      </div>

      <div className="birthday">
   
      <div className="birthdayImage">
      <img alt="Birthday Countdown" src="components/style/img/birthday.png"/>
      </div>
      </div>
      </div>

    );
  }
}

export default Portfolio;
