import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioButton extends Component {
    render() {
        return (
          <div className="portfolioButton">
          <button id ="portfolio"><Link to ="/portfolio">See my Portfolio</Link></button>
          
          </div>
        );
      }
    }


export default PortfolioButton;