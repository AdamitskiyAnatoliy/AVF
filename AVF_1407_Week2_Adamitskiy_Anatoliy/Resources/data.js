/*	This is where the request
 * 	for the data pull is done
 */

var localData = require("localData");
var cloudData = require("cloudData");

//Function that will call to API and return JSON object

exports.getData = function() {
	if (Ti.Network.online === true) {

		var remoteResponse = function() {

			Ti.API.debug(this.responseText);
			var json = JSON.parse(this.responseText);

			localData.destroy();

		for (i = 0, j = json.shots.length; i < j; i++) {
				localData.insert(json.shots[i].image_url, json.shots[i].player.avatar_url, json.shots[i].title, json.shots[i].player.name, json.shots[i].player.likes_count, json.shots[i].views_count, json.shots[i].player.comments_count);
			//console.log("remoteResponse: " + json.shots[i].image_url);
			}
			
			localData.getData();
			cloudData.loginAppUser(json);
			
			//console.log(json.shots[i].image_url);
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

		xhr.open("GET", "http://api.dribbble.com/shots/popular?per_page=50");
		xhr.send();

	} else {	//This is run if there is no network connection

		localData.getData();
		
		alert("Please connect to a Wi-Fi network or cellular data to use this application.");

	}
};
