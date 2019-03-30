import React, { Component } from 'react';
import {MainColors} from "../Color/Color";
const { remote, screen } = window.require('electron');

class Menu extends Component {
    constructor(){
        super();
        this.closeWindow = this.closeWindow.bind(this)
        this.minimizeWindow = this.minimizeWindow.bind(this)
        this.maximizeWindow = this.maximizeWindow.bind(this)
        this.state = {
            maximized: false
          }
    }
    closeWindow(){
        remote.getCurrentWindow().close();
    }
    minimizeWindow(){
        remote.getCurrentWindow().minimize();
    }
    maximizeWindow(maximize){
        if(this.state.maximized === false){
            remote.getCurrentWindow().maximize();
            this.setState({
                maximized: !this.state.maximized
            })
        }else{
            remote.getCurrentWindow().setBounds({
                x: screen.getPrimaryDisplay().size.width/2 - 350/2,
                y: screen.getPrimaryDisplay().size.height/2 - 500/2,
                width: 350,
                height: 500
            });
            this.setState({
                maximized: !this.state.maximized
            })
        }
    }
    render() {
        return (
            <div className="toolbar" style={{"WebkitAppRegion": "drag", backgroundColor: MainColors.dark}}>
                <ul>
                    <li id="minimizeBTN" onClick={this.minimizeWindow}></li><li id="maximizeBTN" onClick={this.maximizeWindow}></li><li id="closeBTN" onClick={this.closeWindow}></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
