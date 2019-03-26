import React, { Component } from 'react';
import {Display} from "../Display/Display";
import {MainColors} from "../Color/Color";

class Keyboard extends Component {
  constructor(){
    super();
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
  render() {
    function addToScreen(data) {
      console.log(data);
    }

    let border = {
      borderColor: MainColors.dark,
      borderStyle: 'solid',
      borderWidth: 1
    };

    function Key(props) {
      return props.keytype !== "0" ? <li className="Smallbuttons" onClick={((e) => addToScreen(props.keytype))} style={border}>{props.keytype}</li> : <li className="Largebuttons" onClick={((e) => addToScreen(props.keytype))} style={border}>{props.keytype}</li>;
    }
    return (
        <div className="keyboard">
            <ul>
              {this.state.keyTypes.map((key) => <Key key={"keyID" + key} keytype={key} />)}
            </ul>
        </div>
    );
  }
}

export default Keyboard;
