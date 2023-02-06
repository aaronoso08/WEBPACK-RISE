import React, { Component } from 'react';
import Homeclock from './homeclock';


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="icon2">
          <a href="https://www.instagram.com/aaron_osrio/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div>
          <Homeclock />
        </div>
        
      </div>
      
    );
  }
}
export default Home;