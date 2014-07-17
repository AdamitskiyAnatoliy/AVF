/*	This module is for all
 * 	of the UI elements inside
 * 	of the application
 */

var data = require('data');
var localData = require("localData");

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
	layout : 'vertical',
	scrollType : 'vertical'
});

exports.title = Ti.UI.createLabel({
	text : "DRIBBBLE",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica"
	},
	color : "white",
	bottom : 10
});

if (platform === 'iphone') {
	mainWindow.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
}

var cameraButton = Ti.UI.createView({
	backgroundColor : "white",
	length : 20,
	width : 20,
	right : 10,
	bottom : 10,
	top : 30,
	borderRadius : 20
});

cameraButton.addEventListener('click', function(e) {
	Ti.Media.showCamera({
		saveToPhotoGallery : true,
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
		success : function(e) {
			if (e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
				var img = Ti.UI.createImageView({
					width : win.width,
					height : win.height,
					image : e.media
				});
				mainWindow.backgroundImage = img;
			}
		}
	});
});

data.getData();

exports.mainWindow = mainWindow;
exports.cameraButton = cameraButton; 