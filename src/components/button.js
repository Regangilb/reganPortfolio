import React, { Component } from 'react';


class Button extends Component {
    render() {
        return (
          <div>
          <button className="button" onClick={this.handleClick}>
          <div className="buttonTitle">
           ''''''''   Go to About Me 
           </div>
          </button>
          
          </div>
        );
      }
    }


export default Button;