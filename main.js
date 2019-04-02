const electron = require('electron')
const fs = require('fs')
const path = require('path')
const ipc = electron.ipcMain;
delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
const { app, BrowserWindow } = electron
var settings = JSON.parse(fs.readFileSync(__dirname + '/src/settings.json'))
let win = null
function createWindow () {
  win = new BrowserWindow({ width: 350, minWidth: 350, height: 500, minHeight: 500, frame: false, transparent: true, webPreferences: {nodeIntegration: true}, resizable: false})
    win.loadURL('http://localhost:3000?dark=' + settings.dark + '&light=' + settings.light)
    ipc.on('colors', (event, args) => {
      fs.writeFileSync(__dirname + '/src/settings.json', JSON.stringify(args)
    );
      event.returnValue = 'Color Changed';
    });
}
app.on('ready', createWindow)
