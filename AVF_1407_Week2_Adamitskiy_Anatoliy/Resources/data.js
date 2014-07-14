/*	This is where the request
 * 	for the data pull is done
 */

var localData = require("localData");

exports.getData = function() {
	if (Ti.Network.online === true) {

		var remoteResponse = function() {

			Ti.API.debug(this.responseText);
			var json = JSON.parse(this.responseText);
			console.log(json);
			localData.insert(json);
		};

		var remoteError = function(e) {
			Ti.API.debug("Status: " + this.status);
			Ti.API.debug("Text: " + this.responseText);
			Ti.API.debug("Error: " + e.error);
		};

		var xhr = Ti.Network.createHTTPClient({
			onload : remoteResponse,
			onerror : remoteError,
			timeout : 3000
		});

		xhr.open("GET", "http://api.dribbble.com/shots/popular");
		xhr.send();

	} else {

		alert("Please connect to a Wi-Fi network or cellular data to use this application.");

	}
}; 