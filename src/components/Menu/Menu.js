import React, { Component } from 'react';
import {MainColors} from "../Color/Color";
const { remote,screen } = window.require('electron');

class Menu extends Component {
  render() {
    let maximized = false;
    function closeWindow(){
        var window = remote.getCurrentWindow();
        window.close();
    }
    function minimizeWindow(){
        var window = remote.getCurrentWindow();
        window.minimize();
    }
    function maximizeWindow(maximize){
        if(maximized == false){
            var window = remote.getCurrentWindow();
            window.maximize();
            maximized = true;
        }else{
            var window = remote.getCurrentWindow();
            window.setBounds({
                x: screen.getPrimaryDisplay().size.width/2 - 350/2,
                y: screen.getPrimaryDisplay().size.height/2 - 500/2,
                width: 350,
                height: 500
            });
            maximized = false;
        }
    }
    return (
        <div className="toolbar" style={{"WebkitAppRegion": "drag", backgroundColor: MainColors.dark}}>
            <ul>
                <li id="minimizeBTN" onClick={minimizeWindow}></li><li id="maximizeBTN" onClick={maximizeWindow}></li><li id="closeBTN" onClick={closeWindow}></li>
            </ul>
        </div>
    );
  }
}

export default Menu;
