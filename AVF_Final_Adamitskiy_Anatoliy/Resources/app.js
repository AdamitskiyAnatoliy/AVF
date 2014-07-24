var ui = require('ui');
var geo = require('geo');

var windowWidth = Ti.Platform.displayCaps.platformWidth;
var windowHeight = Ti.Platform.displayCaps.platformHeight;
var platform = Ti.Platform.osname;

ui.mainWindow.open();
ui.mainWindow.add(ui.table);
ui.mainWindow.add(ui.navBar);