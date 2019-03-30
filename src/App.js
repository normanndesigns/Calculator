import React, { Component } from 'react';
import Menu from "./components/Menu/Menu";
import Keyboard from "./components/Keyboard/Keyboard";
import Color, { MainColors } from "./components/Color/Color";
class App extends Component {
  constructor(props) {
    super(props)
    this.forceRefresh = this.forceRefresh.bind(this)
    this.reverseShow = this.reverseShow.bind(this)
    this.keyboardOrColor = this.keyboardOrColor.bind(this)
    this.state = {
       showkeyboard: true
    }
  }
  forceRefresh() {
    this.forceUpdate();
  }
  keyboardOrColor(){
    if(this.state.showkeyboard){
      return <Keyboard reverseShow={this.reverseShow} />
    }else{
      return <Color reverseShow={this.reverseShow} forceRefresh={this.forceRefresh} />
    }
  }
  reverseShow(){
    this.setState({
      showkeyboard: !this.state.showkeyboard
    })
  }
  render() {
  return (
      <div className="App">
        <div className="global-wrapper" style={{"backgroundColor": MainColors.light}}>
          <Menu />
          {this.keyboardOrColor()}
        </div>
      </div>
    );
  }
}

export default App;
