import React, { Component } from 'react';


class ContactButton extends Component {
    render() {
        return (
          <div>
          <button className="button" onClick={this.handleClick}>
          Contact
           
          </button>
          
          </div>
        );
      }
    }


export default ContactButton;