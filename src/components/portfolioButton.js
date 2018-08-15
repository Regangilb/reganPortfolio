import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioButton extends Component {
    render() {
        return (
          <div>
          <button id ="portfolio"><Link to ="/portfolio">Portfolio</Link></button>
          
          </div>
        );
      }
    }


export default PortfolioButton;