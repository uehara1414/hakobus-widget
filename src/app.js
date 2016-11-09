const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const menubar = require('menubar');

var mb = menubar({ dir:__dirname + '/',
                   icon:__dirname + '/bus.png',
                   preloadWindow: true,
                   windowPosition: 'trayLeft',
                   width:200,
                   height:300
                 });
mb.on('ready', function ready () {
  console.log("Hello, menubar!");
});


let win;

function createWindow() {

  const size = electron.screen.getPrimaryDisplay().size;

  win = new BrowserWindow({
    x: 100,
    y: 100,
    width: 200,
    height: 300,
    frame: false,
    show: true,
    transparent: false,
    resizable: false
  });

  win.loadURL(`file://${__dirname}/index.html`);

  win.setVisibleOnAllWorkspaces(true);

  win.on('closed', () => {
    win = null;
  });

}

/*
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
*/
