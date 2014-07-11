/*  This module is where I will be
 *  creating my API pull to get my
 *  data and parsing it as well.
 */

if (Ti.Network.online === true) {

	var remoteResponse = function() {

		Ti.API.debug(this.responseText);
		var json = JSON.parse(this.responseText);
		
		var location = Ti.UI.createLabel({
			text: json.current_observation.display_location.full,
			font: {fontSize: 44, fontWeight: "bold"},
			top:100,
			color: "white"
		});
		
		var currentWeather = Ti.UI.createImageView({
			image: "images/weather@2x_03.png",
			height: 350,
			width: 350,
			top: 170
		});
		
		var nowcast = Ti.UI.createLabel({
			text: json.current_observation.nowcast,
			font: {fontSize: 20, fontWeight: "bold"},
			color: "#fff",
			bottom: 40
		});
		
		var update = Ti.UI.createLabel({
			text: json.current_observation.observation_time,
			font: {fontSize: 20, fontWeight: "bold"},
			color: "#fff",
			top: 60
		});
		
		var far = Ti.UI.createLabel({
			text: json.current_observation.temp_f + "F / " + json.current_observation.temp_c + "C",
			font: {fontSize: 44, fontWeight: "bold"},
			color: "#fff",
			bottom: 340
		});

		// var info1 = json.current_observation;

		// Ti.API.info(info1.display_location.full);
		// Ti.API.info(info1.temp_f);
		// Ti.API.info(info1.temp_c);

		// var current = {
			// location : info1.display_location.full,
			// tempF : info1.temp_f,
			// tempC : info1.temp_c
		// };
// 
		// console.log(current.location);
		// console.log(current.tempF);
		// console.log(current.tempC);
// 	
	// exports.data = current;
	
	if(platform == 'android'){
		currentWeather.top = 220;
	}
	
		mainWindow.add(far);
		mainWindow.add(update);
		mainWindow.add(nowcast);
		mainWindow.add(currentWeather);
		mainWindow.add(location);
	};

	var remoteError = function(e) {
		Ti.API.debug("Status: " + this.status);
		Ti.API.debug("Text: " + this.responseText);
		Ti.API.debug("Error: " + e.error);
	};

	/* This function is where Titanium reaches
	 * out to the Reddit API to be able to
	 * retrieve the data.
	 */

	var xhr = Ti.Network.createHTTPClient({
		onload : remoteResponse,
		onerror : remoteError,
		timeout : 3000
	});

	xhr.open("GET", "http://api.wunderground.com/api/1b81eddeb1b5e5a8/conditions/q/FL/Winter_Park.json");
	xhr.send();

} else {

	alert("Please connect to a Wi-Fi network or cellular data to use this application.");

}
