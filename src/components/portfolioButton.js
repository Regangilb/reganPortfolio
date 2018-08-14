import React, { Component } from 'react';


class PortfolioButton extends Component {
    render() {
        return (
          <div>
          <button className="port-button" onClick={this.handleClick}>
           PORTFOLIO 
           
          </button>
          
          </div>
        );
      }
    }


export default PortfolioButton;