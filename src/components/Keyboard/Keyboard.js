import React, { Component } from 'react';
import {MainColors} from "../Color/Color";
const math = require('mathjs')

class Keyboard extends Component {
  constructor(){
    super();
    this.Key = this.Key.bind(this)
    this.checkKeyPress = this.checkKeyPress.bind(this)
    this.releaseKey = this.releaseKey.bind(this)
    this.typeOut = this.typeOut.bind(this)
    this.calculate = this.calculate.bind(this)
    this.keyPress = this.keyPress.bind(this)
    
    this.state = {
      equation: "",
      showC: "flex",
      showCL: "none",
      keyTypes: [
        "c", "cl", "+/-", "%", "/",
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
    if(equation !== ""){
      try {
        this.setState({ equation: math.eval(equation) })
      }
      catch(err) {
        this.setState({ equation: "Error" })
      }
    }else{
      this.setState({ equation: "Error" })
    }
    
  }
  checkKeyPress(e){
    if(e.key === "Enter"){ 
      this.keyPress("=")
    }else if(e.key === "Shift"){ 
      this.setState({
        showCL: "flex",
        showC: "none"
      })
    }
  }
  releaseKey(e){
    if(e.key === "Shift"){
      this.setState({
        showCL: "none",
        showC: "flex"
      })
    }
  }
  typeOut(){
    if(this.inputValue.value.substr(this.inputValue.value.length -1) === "=" && this.inputValue.value !== "Color="){ 
      this.calculate(this.state.equation)
      this.inputValue.focus(); 
    }
    else if(this.inputValue.value.startsWith("!") && this.inputValue.value.toLowerCase() === "!color"){
      this.props.reverseShow()
    }
    else{
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
    else if(data === "cl"){
      this.setState({ equation: "" })
      this.inputValue.focus();
    }
    else {
      this.setState({ equation: this.state.equation + data })
      this.inputValue.focus(); 
    }
  }
  Key(props) {
    if(props.keytype === "cl"){
      return <li className="Smallbuttons" onClick={((e) => this.keyPress(props.keytype))} style={{backgroundColor: MainColors.light, borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1, display: this.state.showCL }}>{props.keytype}</li>
    }
    else if(props.keytype === "c"){
      return <li className="Smallbuttons" onClick={((e) => this.keyPress(props.keytype))} style={{backgroundColor: MainColors.light, borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1, display: this.state.showC }}>{props.keytype}</li>
    }
    else if(props.keytype === "0"){
      return <li className="Largebuttons" onClick={((e) => this.keyPress(props.keytype))} style={{backgroundColor: MainColors.light, borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li>
    }
    else{
      return <li className="Smallbuttons" onClick={((e) => this.keyPress(props.keytype))} style={{backgroundColor: MainColors.light, borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1 }}>{props.keytype}</li>
    } 
  }
  render() {
    return (
      <div>
          <div>
              <input type="text" className="screen" ref={input => this.inputValue = input} onChange={this.typeOut} onKeyDown={this.checkKeyPress} onKeyUp={this.releaseKey} style={{"backgroundColor": MainColors.dark}} value={this.state.equation} />
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
