/*	This module is for all
 * 	of the UI elements inside
 * 	of the application
 */

var data = require('data');

exports.mainWindow = Ti.UI.createWindow({
	backgroundColor: '#fff'
});

exports.mapWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

// var rightView = Ti.Map.createView({
	// left:0,
	// width:200,
    // mapType: Ti.Map.STANDARD_TYPE,
    // region: {
    	// latitude:33.74511, 
    	// longitude:-84.38993, 
        // latitudeDelta:0.01,
        // longitudeDelta:0.01 
    // },
    // animate:true,
    // regionFit:true,
    // userLocation:true
// });

data.getData();
