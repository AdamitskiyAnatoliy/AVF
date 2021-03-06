var moreInfo = require('moreInfo');
var windowWidth = Ti.Platform.displayCaps.platformWidth;
var platform = Ti.Platform.osname;

var mainWindow = Ti.UI.createWindow({
	backgroundColor : '#fff'
});

var table = Ti.UI.createTableView({
	top : 65,
	backgroundColor : "#fbfce7"
});

var navBar = Ti.UI.createView({
	top : 0,
	height : 65,
	width : windowWidth,
	backgroundColor : "#ca902c"
});

var title = Ti.UI.createLabel({
	text : "Café Finder",
	font : {
		fontSize : "22dp",
		fontFamily : "Helvetica",
		fonrtWeight : 'bold'
	},
	color : "#363636",
	bottom : 11
});

if (platform === 'iphone') {
	mainWindow.statusBarStyle = Titanium.UI.iPhone.StatusBar.DARK_CONTENT;
}

exports.backButton = Ti.UI.createLabel({

	text : "Back",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica"
	},
	color : "#363636",
	bottom : 11,
	left : 11

});

var moreInfoWindow = Ti.UI.createWindow({
	backgroundColor : "#fbfce7"
});

exports.navBar2 = Ti.UI.createView({
	top : 0,
	height : 65,
	width : windowWidth,
	backgroundColor : "#ca902c"
});

var line = Ti.UI.createView({
	backgroundColor : "#363636",
	width : windowWidth,
	height : 1 / 2,
	top : 445
});

var line2 = Ti.UI.createView({
	backgroundColor : "#363636",
	width : windowWidth,
	height : 1 / 2,
	top : 495
});

moreInfoWindow.add(line2);
moreInfoWindow.add(line);

exports.populate = function(nameData, cityData, stateData, formattedAddressData, formattedPhoneData, countryData, latData, lngData) {

	var tableSection = Ti.UI.createTableViewSection({
	});

	var sections = [];

	for ( i = 0, j = nameData.length; i < j; i++) {

		var tableRow = Ti.UI.createTableViewRow({
			color : "#363636",
			height : 50
		});

		var mainTitle = Ti.UI.createLabel({
			text : nameData[i],
			left : 60,
			font : {
				fontSize : "18dp",
				fontFamily : "Helvetica"
			},
			color : "#363636"

		});

		var rowPic = Ti.UI.createImageView({
			image : "coffeeCup.jpg",
			height : 40,
			width : 40,
			left : 10,
			borderRadius : 20,
			borderWidth : 1,
			borderColor : "#363636"
		});

		if (platform === "iphone") {
			tableRow.hasChild = true;
		}
		tableRow.add(mainTitle);
		tableRow.add(rowPic);
		tableSection.add(tableRow);

	}
	var num = "(407) 597-0091";
	for ( i = 0, j = nameData.length; i < j; i++) {

		var address = Ti.UI.createLabel({

			text : formattedAddressData[i],
			font : {
				fontSize : "20dp",
				fontFamily : "Helvetica"
			},
			color : "#363636",
			top : 405

		});

		var city = Ti.UI.createLabel({

			text : cityData[i],
			font : {
				fontSize : "20dp",
				fontFamily : "Helvetica"
			},
			color : "#363636",
			top : 455

		});

		var phone = Ti.UI.createLabel({
			text : num,
			font : {
				fontSize : "20dp",
				fontFamily : "Helvetica"
			},
			color : "#363636",
			top : 505
		});

	}

	phone.addEventListener("click", function(e) {
		Titanium.Platform.openURL(num);
	});

	sections.push(tableSection);
	table.setData(sections);
	moreInfoWindow.add(address);
	moreInfoWindow.add(city);
	moreInfoWindow.add(phone);

};

table.addEventListener("click", moreInfo.openMoreInfo);

navBar.add(title);

exports.mainWindow = mainWindow;
exports.table = table;
exports.navBar = navBar;
exports.moreInfoWindow = moreInfoWindow;
