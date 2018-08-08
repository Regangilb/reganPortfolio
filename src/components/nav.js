import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
      <div className="title">Regan Gilbert Valgren</div>
      <div class="container">
      <div class="content-wrapper">
      <i class="fas fa-bars"></i>
        <ul>
        
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default Nav;
