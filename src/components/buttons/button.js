import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {

    render() {
        return (
          <div>
          <div className="aboutButton">
            <button id ="about"><Link to ="/about">Go to About</Link></button>

          
          </div>
          </div>
        );
      }
    }


export default Button;