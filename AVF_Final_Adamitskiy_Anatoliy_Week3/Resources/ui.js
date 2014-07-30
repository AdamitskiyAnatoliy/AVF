var moreInfo = require('moreInfo');

var platform = Ti.Platform.osname;

var mainWindow = Ti.UI.createWindow({
	backgroundColor : '#fff'
});

var table = Ti.UI.createTableView({
	top : 65,
	backgroundColor : "#8b794f"
});

var navBar = Ti.UI.createView({
	top : 0,
	height : 65,
	width : windowWidth,
	backgroundColor : "#138e56"
});

var title = Ti.UI.createLabel({
	text : "Cafe Finder",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica",
		fonrtWeight: 'bold'
	},
	color : "white",
	bottom : 11
});

if (platform === 'iphone') {
	mainWindow.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
}

exports.backButton = Ti.UI.createLabel({

	text : "Back",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica"
	},
	color : "white",
	bottom : 11,
	left : 11

});

var moreInfoWindow = Ti.UI.createWindow({
	backgroundColor : "#8b794f"
});

exports.navBar2 = Ti.UI.createView({
	top : 0,
	height : 65,
	width : windowWidth,
	backgroundColor : "#138e56"
});

exports.addressLabel = Ti.UI.createLabel({

	text : "Back",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica"
	},
	color : "white",
	bottom : 11,
	left : 11

});

exports.populate = function(nameData, cityData, stateData, formattedAddressData, formattedPhoneData, countryData, latData, lngData) {

	var tableSection = Ti.UI.createTableViewSection({
	});

	var sections = [];

	for ( i = 0, j = nameData.length; i < j; i++) {

		var tableRow = Ti.UI.createTableViewRow({
			title : nameData[i],
			hasChild : true,
			color : "#fff",
			height : 50
		});

		tableSection.add(tableRow);

	}
	
	for ( i = 0, j = nameData.length; i < j; i++) {
		
		var address = Ti.UI.createLabel({

			text : formattedAddressData[i],
			font : {
				fontSize : "20dp",
				fontFamily : "Helvetica"
			},
			color : "white",
			top: 405

		}); 
		
		var city = Ti.UI.createLabel({

			text : cityData[i],
			font : {
				fontSize : "20dp",
				fontFamily : "Helvetica"
			},
			color : "white",
			top: 455

		}); 
		
		var phone = Ti.UI.createLabel({

			text : formattedPhoneData[i],
			font : {
				fontSize : "20dp",
				fontFamily : "Helvetica"
			},
			color : "white",
			top: 505

		}); 
		
		

	}

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