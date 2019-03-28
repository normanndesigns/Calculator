import React, { Component } from 'react';
import {MainColors} from "../Color/Color";
const math = require('mathjs')

class Keyboard extends Component {
  constructor(){
    super();
    this.Key = this.Key.bind(this)
    this.enterKey = this.enterKey.bind(this)
    this.typeOut = this.typeOut.bind(this)
    this.calculate = this.calculate.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.state = {
      equation: "",
      keyTypes: [
        "c", "+/-", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ]
    }
  }
  componentDidMount(){
    this.inputValue.focus(); 
  }
  calculate(equation){
    try {
      this.setState({ equation: math.eval(equation) })
    }
    catch(err) {
      this.setState({ equation: "Error" })
    }
  }
  enterKey(e){
    if(e.key === "Enter"){ 
      this.keyPress("=")
    }
  }
  typeOut(){
    if(this.inputValue.value.substr(this.inputValue.value.length -1) === "="){ 
      this.calculate(this.state.equation)
      this.inputValue.focus(); 
    }else{
      this.inputValue.focus(); 
      this.setState({ equation: this.inputValue.value })
    }  
  }
  keyPress(data) {
    if(data === "c"){
      try {
        this.setState({ equation: this.state.equation.toString().slice(0, -1) })
      }
      catch(err) {
        this.setState({ equation: "Error" })
      }
      this.inputValue.focus(); 
    }
    else if(data === "="){
      this.calculate(this.state.equation)
      this.inputValue.focus();
    } 
    else {
      this.setState({ equation: this.state.equation + data })
      this.inputValue.focus(); 
    }
  }
  Key(props) {
    return props.keytype !== "0" ? <li className="Smallbuttons" onClick={((e) => this.keyPress(props.keytype))} style={{ borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li> : <li className="Largebuttons" onClick={((e) => this.keyPress(props.keytype))} style={{ borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li>;
  }
  render() {
    return (
      <div>
          <div>
              <input type="text" className="screen" ref={input => this.inputValue = input} onChange={this.typeOut} onKeyUp={this.enterKey} style={{"backgroundColor": MainColors.dark}} value={this.state.equation} />
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
