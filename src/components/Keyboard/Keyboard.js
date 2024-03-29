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
    this.forceRefresh = this.forceRefresh.bind(this)
    this.getLastDigits = this.getLastDigits.bind(this)
    this.state = {
      equation: "",
      showC: "flex",
      showCL: "none",
      tempEquation: "",
      keyTypes: [
        "c", "cl", "−", "%", "/",
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
  forceRefresh() {
    this.forceUpdate();
  }
  getLastDigits(s) {
    String.prototype.replaceBetween = function(start, end, what) {
         return this.substring(0, start) + what + this.substring(end);
    };
    var newString = s.replace(/\d+$/, "(" + s.match(/\d+$/)[0] + ")");
    var lastNum = "(" + s.match(/\d+$/)[0] + ")";
    var charb4 = newString.substring(newString.indexOf(lastNum), newString.indexOf(lastNum) - 1);
    if(charb4 === "−"){
       return newString.replaceBetween(newString.indexOf(lastNum) - 1, newString.length, lastNum).replace("(", "").replace(")", "");
    }else{
       return newString.replaceBetween(newString.indexOf(lastNum), newString.length, "−" + lastNum).replace("(", "").replace(")", "");
    }
  }


  calculate(equation){
    if(equation.includes("−")){
      equation = equation.replace("−", "-")
    }
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
    if(this.inputValue.value.substr(this.inputValue.value.length -1) === "="){ 
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
    else if(data === "−"){
      if(this.state.equation === ""){
        this.setState({
          equation: "−"
        })
      }else if(this.state.equation === "−"){
        this.setState({
          equation: ""
        })
      }else{
        this.setState({
          equation: this.getLastDigits(this.inputValue.value)
        })
      }
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
    else if(props.keytype === "−"){
      return <li className="Smallbuttons" onClick={((e) => this.keyPress(props.keytype))} style={{backgroundColor: MainColors.light, borderColor: MainColors.dark, borderStyle: 'solid', borderWidth: 1}}>+/-</li>
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
