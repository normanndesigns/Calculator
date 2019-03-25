import React, { Component } from 'react';
import {Display} from "../Display/Display";
import {MainColors} from "../Color/Color";

class Keyboard extends Component {
  render() {
    let border = {
      borderColor: MainColors.dark,
      borderStyle: 'solid',
      borderWidth: 1
    };
    function AddToScreen(){
      
    }
    return (
        <div className="keyboard">
            <ul>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>C</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>+/−</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>%</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>÷</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>7</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>8</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>9</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>×</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>4</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>5</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>6</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>−</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>1</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>2</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>3</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>+</li>
              <li className="Largebuttons" onClick={AddToScreen} style={border}>0</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>•</li>
              <li className="Smallbuttons" onClick={AddToScreen} style={border}>=</li>
            </ul>
        </div>
    );
  }
}

export default Keyboard;
