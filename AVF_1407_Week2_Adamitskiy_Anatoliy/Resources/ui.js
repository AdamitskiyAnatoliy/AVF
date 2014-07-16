/*	This module is for all
 * 	of the UI elements inside
 * 	of the application
 */

var data = require('data');
var localData = require("localData");

// data.getData();

var mainWindow = Ti.UI.createWindow({
	backgroundColor : '#000'
});

exports.mapWindow = Ti.UI.createWindow({
	backgroundColor : "#fff"
});

exports.navBar = Ti.UI.createView({
	top : 0,
	height : 65,
	width : windowWidth,
	backgroundColor : "#323232"
});

exports.scrollView = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 65,
	width : windowWidth,
	layout : 'vertical'
});

if (platform === 'iphone') {
	mainWindow.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
}

// exports.populate = function(img,av) {
// for ( i = 0, j = img.length; i <= j; i++) {
//
// //console.log(img);
//
// var image = Ti.UI.createView({
// backgroundColor : "red",
// backgroundImage : img,
// width : windowWidth,
// height : "250dp",
// top : "20dp"
// });
//
// if (platform === 'android') {
// image.width = windowWidth / 2;
// image.height = '300dp';
// }
//
// var picInfoBack = Ti.UI.createView({
// backgroundImage : "images/gradient@2x.png",
// top : 0,
// width : windowWidth,
// height : 80
// });
//
// var avatarImage = Ti.UI.createView({
// borderRadius : 20,
// backgroundColor : "#fff",
// borderWidth : 1,
// borderColor : "#fff",
// width : 40,
// height : 40,
// top : 7,
// left : 7,
// backgroundImage : av[i]
// });
//
// scrollView.add(image);
// image.add(picInfoBack);
// picInfoBack.add(avatarImage);
//
// }
// };

data.getData();

//exports.scrollView = scrollView;
exports.mainWindow = mainWindow;
