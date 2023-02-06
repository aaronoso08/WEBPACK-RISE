import React, { Component } from 'react';
import '../style/app.css';
import Clock from './clock';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      deadline: 'March 15, 2023',
    };
  }
  render() {
    return (
      <div className="countdown">
        <div className="App-date">{this.state.deadline}</div>
        <Clock deadline={ this.state.deadline }/>
      </div>
    );
  }
}

export default App;
