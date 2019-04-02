import React, { Component } from 'react'
import queryString from "query-string"
const { ipcRenderer } = window.require('electron');
export class Color extends Component {
  constructor(props) {
    super(props)
    this.changeColor = this.changeColor.bind(this)
    this.colorBox = this.colorBox.bind(this)
    this.state = {
        colorArray: Object.entries(Colors)
    }
  }
  changeColor(props){
    ipcRenderer.send('colors',{light: props.color[1].light, dark: props.color[1].dark});
    MainColors["light"] = props.color[1].light
    MainColors["dark"] = props.color[1].dark
  }
  colorBox(props){
      return <div className="Smallbuttons" style={{ backgroundColor: Colors[props.color[0]].dark}} onClick={(event) => {this.props.forceRefresh(); this.props.reverseShow(); this.changeColor(props)}} > <svg className="roundSVG" id='Layer_1' xmlns='http://www.w3.org/2000/svg' fill={Colors[props.color[0]].light} viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' /></svg></div>
  }
  render() {
     return (
      <div className="ColorWrapper">
        {this.state.colorArray.map((key) =>
            <this.colorBox key={"keyID" + key} color={key} />
        )}
      </div>
    )
  }
}
export const Colors = {
  red: {
    light: 'rgb(244, 67, 54)',
    dark: 'rgb(229, 57, 53)'
  },
  red1: {
    light: 'rgb(214, 48, 49)',
    dark: 'rgb(199, 33, 34)'
  },
  green: {
    light: 'rgb(0, 184, 148)',
    dark: 'rgb(0, 169, 133)'
  },
  green1: {
    light: 'rgb(76, 175, 80)',
    dark: 'rgb(67, 160, 71)'
  },
  turquoise: {
    light: 'rgb(0, 206, 201)',
    dark: 'rgb(0, 191, 186)'
  },
  turquoise1: {
    light: 'rgb(77, 182, 172)',
    dark: 'rgb(38, 166, 154)'
  },
  blue: {
    light: 'rgb(9, 132, 227)',
    dark: 'rgb(9, 117, 212)'
  },
  blue1: {
    light: 'rgb(33, 150, 243)',
    dark: 'rgb(30, 136, 229)'
  },
  purple: {
    light: 'rgb(108, 92, 231)',
    dark: 'rgb(93, 77, 216)'
  },
  purple1: {
    light: 'rgb(156, 39, 176)',
    dark: 'rgb(142, 36, 170)'
  },
  yellow: {
    light: 'rgb(253, 203, 110)',
    dark: 'rgb(238, 188, 95)'
  },
  yellow1: {
    light: 'rgb(255, 235, 59)',
    dark: 'rgb(253, 216, 53)'
  },
  brown: {
    light: 'rgb(121, 85, 72)',
    dark: 'rgb(109, 76, 65)'
  },
  brown1: {
    light: 'rgb(93, 64, 55)',
    dark: 'rgb(78, 52, 46)'
  },
  pink: {
    light: 'rgb(240, 98, 146)',
    dark: 'rgb(236, 64, 122)'
  },
  pink1: {
    light: 'rgb(233, 30, 99)',
    dark: 'rgb(216, 27, 96)'
  },
  bluegrey: {
    light: 'rgb(96, 125, 139)',
    dark: 'rgb(84, 110, 122)'
  },
  bluegrey1: {
    light: 'rgb(69, 90, 100)',
    dark: 'rgb(55, 71, 79)'
  },
  amber: {
    light: 'rgb(255, 160, 0)',
    dark: 'rgb(255, 143, 0)'
  },
  amber1: {
    light: 'rgb(255, 193, 7)',
    dark: 'rgb(255, 179, 0)'
  },
  grey: {
    light: 'rgb(117, 117, 117)',
    dark: 'rgb(97, 97, 97)'
  },
  grey1: {
    light: 'rgb(189, 189, 189)',
    dark: 'rgb(158, 158, 158)'
  },
  darkgrey: {
    light: 'rgb(47, 49, 54)',
    dark: 'rgb(54, 57, 63)'
  },
  darkgrey1: {
    light: 'rgb(62, 66, 72)',
    dark: 'rgb(72, 76, 82)'
  }
};
export const MainColors = {
  light: queryString.parse(window.location.search).light,
  dark: queryString.parse(window.location.search).dark
};
export default Color
