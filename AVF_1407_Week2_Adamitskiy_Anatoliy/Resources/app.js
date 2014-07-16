/* 	Anatoliy Adamitskiy
 * 	Advanced Visual Frameworks
 * 	Week 2 Project
 */

var windowWidth = Ti.Platform.displayCaps.platformWidth;
var windowHeight = Ti.Platform.displayCaps.platformHeight;
var platform = Ti.Platform.osname;

var ui = require('ui');

ui.mainWindow.add(ui.navBar);
ui.mainWindow.add(ui.scrollView);
ui.mainWindow.open();