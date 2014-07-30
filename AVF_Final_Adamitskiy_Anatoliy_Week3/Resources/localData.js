/*	This is where the SQLite
 * 	statements are housed
 */

var windowWidth = Ti.Platform.displayCaps.platformWidth;
var windowHeight = Ti.Platform.displayCaps.platformHeight;
var platform = Ti.Platform.osname;

var ui = require('ui');
//var geo = require('geo');

//Opening my SQLite Database

var db = Titanium.Database.open("database");
db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, name TEXT, city TEXT, state TEXT, formattedAddress TEXT, formattedPhone TEXT, country TEXT, lat TEXT, lng TEXT)");

//Inserting columns and data into database

exports.insert = function(name1, city1, state1, formattedAddress1, formattedPhone1, country1, latitude1, longitude1) {
	var db = Titanium.Database.open("database");
	db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, name TEXT, city TEXT, state TEXT, formattedAddress TEXT, formattedPhone TEXT, country TEXT, lat TEXT, lng TEXT)");
	db.execute("INSERT INTO database (name, city, state, formattedAddress, formattedPhone, country, lat, lng) VALUES (?,?,?,?,?,?,?,?)", name1, city1, state1, formattedAddress1, formattedPhone1, country1, latitude1, longitude1);
};

//Function that grabs the data to populate UI

exports.getData1 = function() {
	var posts = db.execute("SELECT * FROM database");

	var nameData = [];
	var cityData = [];
	var stateData = [];
	var formattedAddressData = [];
	var formattedPhoneData = [];
	var countryData = [];
	var latData = [];
	var lngData = [];
	//
	while (posts.isValidRow()) {

		var data = {};
		data.id = posts.fieldByName("id");
		data.name = posts.fieldByName("name");
		data.city = posts.fieldByName("city");
		data.state = posts.fieldByName("state");
		data.formattedAddress = posts.fieldByName("formattedAddress");
		data.formattedPhone = posts.fieldByName("formattedPhone");
		data.country = posts.fieldByName("country");
		data.lat = posts.fieldByName("lat");
		data.lng = posts.fieldByName("lng");

		nameData.push(data.name);
		cityData.push(data.city);
		stateData.push(data.state);
		formattedAddressData.push(data.formattedAddress);
		formattedPhoneData.push(data.formattedPhone);
		countryData.push(data.country);
		latData.push(data.lat);
		lngData.push(data.lng);

		posts.next();
	}

	ui.populate(nameData, cityData, stateData, formattedAddressData, formattedPhoneData, countryData, latData, lngData);
	
	if (platform === "iphone") {
		geo.addMap(latData[0], lngData[0], nameData[0], cityData[0]);
	}

};

//Function that clears SQLite database

exports.destroy = function() {
	db.execute("DELETE FROM database");
}; 