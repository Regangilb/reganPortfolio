import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactButton extends Component {
    render() {
        return (
          <div>
          <button id ="contact"><Link to ="/contact">Contact</Link></button>
          
          </div>
        );
      }
    }


export default ContactButton;