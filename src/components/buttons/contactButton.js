import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactButton extends Component {
    render() {
        return (
          <div className="contactButton">
          <button id ="contact"><Link to ="/contact">Go to Contact Me</Link></button>
          
          </div>
        );
      }
    }


export default ContactButton;