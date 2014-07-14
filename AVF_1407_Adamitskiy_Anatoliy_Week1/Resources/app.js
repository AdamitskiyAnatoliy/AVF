/*	Anatoliy Adamitskiy
 * 	Advanced Visual Frameworks
 * 	Week 1 Project
 */

var windowWidth = Ti.Platform.displayCaps.platformWidth;
var windowHeight = Ti.Platform.displayCaps.platformHeight;
var platform = Ti.Platform.osname;

//	Requiring all my modules
var data = require('data');
console.log(data);
var sqlLite = require('sqlLite');

//	Opening my tabGroup for all the tabs
var tabGroup = Ti.UI.createTabGroup({
	barColor : "#037476",
	tabsBackgroundColor : "#037476",
	activeTabIconTint : "#58fa8a"
});

//	This is where all the windows are defined for the different tabs
var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#04a6a9",
	navBarHidden : true
});

var day7Win = Ti.UI.createWindow({
	backgroundColor : "#04a6a9",
	navBarHidden : true
});

var hourlyWin = Ti.UI.createWindow({
	backgroundColor : "#04a6a9",
	navBarHidden : true
});

var radarWin = Ti.UI.createWindow({
	backgroundColor : "#04a6a9",
	navBarHidden : true
});

var webcamsWin = Ti.UI.createWindow({
	backgroundColor : "#04a6a9",
	navBarHidden : true
});

var alertsWin = Ti.UI.createWindow({
	backgroundColor : "#04a6a9",
	navBarHidden : true
});

var settingsWin = Ti.UI.createWindow({
	backgroundColor : "#04a6a9",
	navBarHidden : true
});

//	Tabs are being created
var current = Titanium.UI.createTab({
	window : mainWindow,
	title : 'Current'
});

var day7 = Titanium.UI.createTab({
	window : day7Win,
	title : '7 Day'
});

var hourly = Titanium.UI.createTab({
	window : hourlyWin,
	title : 'Hourly'
});

var radar = Titanium.UI.createTab({
	window : radarWin,
	title : 'Radar'
});

var webcams = Titanium.UI.createTab({
	window : webcamsWin,
	title : 'Webcams'
});

var alerts = Titanium.UI.createTab({
	window : alertsWin,
	title : 'Alerts'
});

var settings = Titanium.UI.createTab({
	window : settingsWin,
	title : 'Settings'
});


//	Different UI elements for the ipad
if (platform === "ipad") {
	mainWindow.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	day7Win.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	hourlyWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	radarWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	alertsWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	webcamsWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	settingsWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	current.icon = 'images/current@2x_03.png';
	settings.icon = 'images/settings@2x_03.png';
	alerts.icon = 'images/alerts@2x_03.png';
	day7.icon = 'images/day7@2x_03.png';
	hourly.icon = 'images/hourly@2x_03.png';
	webcams.icon = 'images/webcams@2x_03.png';
	radar.icon = 'images/radar@2x_03.png';
}

var bigCircle = Ti.UI.createView({
	backgroundImage : 'images/big_circle@2x.png',
	width : '700sp',
	height : '700sp',
	top : '40sp'
});

var mediumCircleLeft = Ti.UI.createView({
	backgroundImage : 'images/medium@2x.png',
	width : '250sp',
	height : '250sp',
	bottom : '20sp',
	left: '30sp'
});

var mediumCircleRight = Ti.UI.createView({
	backgroundImage : 'images/medium@2x.png',
	width : '250sp',
	height : '250sp',
	bottom : '20sp',
	right: '30sp'
});

var sideMenu = Ti.UI.createView({
	backgroundImage : 'images/navMenu@2x.png',
	left : '10sp',
	top : '40sp',
	height : 30,
	width : 40
});

if(platform === "android"){
	bigCircle.top = '60sp';
}

//mainWindow.add(mediumCircleRight);
//mainWindow.add(mediumCircleLeft);
//mainWindow.add(bigCircle);
mainWindow.add(sideMenu);



//	Adding all the elements together
tabGroup.addTab(current);
tabGroup.addTab(day7);
tabGroup.addTab(hourly);
tabGroup.addTab(radar);
tabGroup.addTab(webcams);
tabGroup.addTab(alerts);
tabGroup.addTab(settings);
tabGroup.open(); 