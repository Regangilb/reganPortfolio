import React, { Component } from 'react';
import Nav from './nav'

class Contact extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Contact Me</h1>
        <div className="name">Regan Gilbert
        </div>
        <div className="email">Email: regan.m.gilbert@gmail.com</div>
        <div className="number">Phone Number: 801-319-9867</div>
        <div className="linked">LinkedIn: https://www.linkedin.com/in/regangilbert/ </div>
        <div className="github">GitHub: https://github.com/Regangilb</div>
        <div className="picture">
        <img alt="about me photo" src="https://photos.smugmug.com/Other/Regan2015/2017-Part-1/Spring-2017/i-6dTnjzj/0/cbf58b6f/X4/IMG_9259-X4.jpg"/>
        </div>
      </div>
    );
  }
}

export default Contact;
