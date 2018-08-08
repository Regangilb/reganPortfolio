import React, { Component } from 'react';
import Nav from './nav'

class About extends Component {
  render() {
    return (
      <div>
        <Nav />

      <div>
        <div className="aboutMe">About Me</div>

        
        <div class="content-wrapper">
        <div className="paragraph">
        Morbi imperdiet lorem eu purus lobortis,
         a aliquet magna mattis. Vestibulum at sagittis dui.
          Nam et leo vel justo porta fringilla eu at nisl. 
          Suspendisse commodo egestas placerat. Nunc vel venenatis nisi.
           Curabitur vel pharetra enim. Nulla ut mauris dolor. Maecenas egestas 
           pretium ultricies. Duis a dolor porta, volutpat libero non, cursus enim.
         Praesent vitae eleifend tellus, nec imperdiet quam.
        <div className="image">
         <img alt="about me photo" src="https://photos.smugmug.com/Other/Regan2015/2017-Part-1/2017-Winter/i-cqqjrXX/1/6fb02bb7/X3/IMG_2809-X3.jpg"/>
                </div>
              </div>
            </div>
        </div>
      </div>

    );
  }
}

export default About;
