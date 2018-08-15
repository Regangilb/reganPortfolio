import React, { Component } from 'react';
import Nav from './nav'
import ContactButton from './contactButton'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ContactButton />
        <div className="title">
        <h1>My Portfolio</h1>
      </div>

      <div className="birthday">
   
      <div className="birthdayImage">
      <img alt="Birthday Countdown" src="https://photos.smugmug.com/Other/Regan2015/Dev/i-4D4ftBc/0/9be74712/X2/birthday-X2.png"/>
     <div className="madlibsImage">
      <img alt="Madlibs" src="https://photos.smugmug.com/Other/Regan2015/Dev/i-2BBLdFm/0/bc87aa59/X2/Screen%20Shot%202018-08-14%20at%2011.27.10%20AM-X2.png"/>
      <div className="courseImage">
      <img alt="Course" src="https://photos.smugmug.com/Other/Regan2015/Dev/i-KWHS7hk/0/9326cc61/qLy9bGwiiAaNdRU%2BR6foEg%2BSpus%3D-1534354129-O/i-KWHS7hk.png"/>
      </div>
      </div>
      </div>
      </div>
      </div>

    );
  }
}

export default Portfolio;
