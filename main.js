const electron = require('electron')
const path = require('path')

const { app, BrowserWindow } = electron

let win = null
function createWindow () {
  win = new BrowserWindow({ width: 350, minWidth: 350, height: 500, minHeight: 500, frame: false, transparent: true, webPreferences: {nodeIntegration: true}, resizable: false})
  win.loadURL('http://localhost:3000/')
  //win.webContents.openDevTools()
  
}
app.on('ready', createWindow)

