import React, { Component } from 'react';
import {Display} from "../Display/Display";
import {MainColors} from "../Color/Color";

class Keyboard extends Component {
  constructor(){
    super();
    this.Key = this.Key.bind(this)
    this.addToScreen = this.addToScreen.bind(this)
    this.state = {
      keyTypes: [
        "c", "+/−", "%", "÷",
        "7", "8", "9", "×",
        "4", "5", "6", "−",
        "1", "2", "3", "+",
        "0", "•", "="
    ]
    }
  }
  addToScreen(data) {
    console.log(data);
  }
  Key(props) {
    return props.keytype !== "0" ? <li className="Smallbuttons" onClick={((e) => this.addToScreen(props.keytype))} style={{ borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li> : <li className="Largebuttons" onClick={((e) => this.addToScreen(props.keytype))} style={{ borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li>;
  }
  render() {
    return (
        <div className="keyboard">
            <ul>
              {this.state.keyTypes.map((key) => <this.Key key={"keyID" + key} keytype={key} />)}
            </ul>
        </div>
    );
  }
}

export default Keyboard;
