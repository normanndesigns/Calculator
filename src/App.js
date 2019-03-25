import React, { Component } from 'react';
import Menu from "./components/Menu/Menu";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";
import {MainColors} from "./components/Color/Color";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="global-wrapper" style={{"backgroundColor": MainColors.light}}>
          <Menu />
          <Display />
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default App;
