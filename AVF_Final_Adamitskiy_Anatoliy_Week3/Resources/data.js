/*	This is where the request
 * 	for the data pull is done
 */

var localData = require("localData");
var cloudData = require("cloudData");

//Function that will call to API and return JSON object

exports.getData = function(lat1, lng1) {
	if (Ti.Network.online === true) {

		var remoteResponse = function() {

			Ti.API.debug(this.responseText);
			var json = JSON.parse(this.responseText);
			
			console.log(json);

			localData.destroy();

		for (i = 0, j = json.response.venues.length; i < j; i++) {
				 localData.insert(json.response.venues[i].name, json.response.venues[i].location.city, json.response.venues[i].location.state, json.response.venues[i].location.formattedAddress[0], json.response.venues[i].contact.formattedPhone, json.response.venues[i].location.country, json.response.venues[i].location.lat, json.response.venues[i].location.lng);
			}
 
			localData.getData1();
			cloudData.loginAppUser(json);
		};

		//Runs if any errors occur

		var remoteError = function(e) {
			Ti.API.debug("Status: " + this.status);
			Ti.API.debug("Text: " + this.responseText);
			Ti.API.debug("Error: " + e.error);
		};

		//HTTP Client request

		var xhr = Ti.Network.createHTTPClient({
			onload : remoteResponse,
			onerror : remoteError,
			timeout : 3000
		});

		xhr.open("GET", "https://api.foursquare.com/v2/venues/search?ll=" + lat1 + "," + lng1 + "&client_id=MSYJ5ZD30BTIF1HB2E3DZN2RCMULZWEQ5HTTZDRMFHSUDTQS&client_secret=J5WTD3IPS1BNBCHPRJTSJ40UNSFBVYCBTQUAWXFUVAAAFIOS&query=coffee&v=20140714");
		xhr.send();

	} else {	//This is run if there is no network connection

		localData.getData1();

		alert("Please connect to a Wi-Fi network or cellular data to use this application.");

	}
};