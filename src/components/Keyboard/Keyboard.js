import React, { Component } from 'react';
import {MainColors} from "../Color/Color";

class Keyboard extends Component {
  constructor(){
    super();
    this.Key = this.Key.bind(this)
    this.typeOut = this.typeOut.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.state = {
      equation: "",
      keyTypes: [
        "c", "+/-", "%", "/",
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ",", "="
    ]
    }
  }
  typeOut(){
    this.setState({
       equation: this.inputValue.value
    })
  }
  keyPress(data) {
    this.setState({
      equation: this.state.equation + data
   })
  }
  Key(props) {
    return props.keytype !== "0" ? <li className="Smallbuttons" onClick={((e) => this.keyPress("(" + props.keytype + ")"))} style={{ borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li> : <li className="Largebuttons" onClick={((e) => this.keyPress(props.keytype))} style={{ borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li>;
  }
  render() {
    return (
      <div>
          <div>
              <input type="text" className="screen" ref={input => this.inputValue = input} onChange={this.typeOut} style={{"backgroundColor": MainColors.dark}} value={this.state.equation} />
          </div>
          <div className="keyboard">
              <ul>
                {this.state.keyTypes.map((key) => <this.Key key={"keyID" + key} keytype={key} />)}
              </ul>
          </div>
      </div> 
    )
  }
}

export default Keyboard;
