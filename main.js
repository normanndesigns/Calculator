const electron = require('electron')
const fs = require('fs')
const path = require('path')
const ipc = electron.ipcMain;
delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
const { app, BrowserWindow } = electron

let win = null
function createWindow () {
  win = new BrowserWindow({ width: 350, minWidth: 350, height: 500, minHeight: 500, frame: false, transparent: true, webPreferences: {nodeIntegration: true}, resizable: false})
    fs.readFile( __dirname + '/src/settings.json', function (err, data) {
      if (err) {
        throw err; 
      }
      var colorData = JSON.parse(data)
      win.loadURL('http://localhost:3000?dark='+ colorData.dark + "&light=" + colorData.light)
    });
    ipc.on('colors', (event, args) => {
      fs.writeFile (__dirname + '/src/settings.json', JSON.stringify(args), function(err) {
        if (err) throw err;
        }
    );
      event.returnValue = 'Color Changed';
    });
}
app.on('ready', createWindow)
