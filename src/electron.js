const { app, BrowserWindow } = require('electron');
const path  = require("path")
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, '/icon.png')
  });
  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadURL('http://localhost:3000');
}

app.on('ready', async () => {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

module.exports = app;