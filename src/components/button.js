import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {

    render() {
        return (
          <div>
            <button id ="about"><Link to ="/about">About</Link></button>

          
          </div>
        );
      }
    }


export default Button;