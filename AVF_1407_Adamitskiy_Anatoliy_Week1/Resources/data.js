/*  This module is where I will be
 *  creating my API pull to get my
 *  data and parsing it as well.
 */

if (Ti.Network.online === true) {
	
	var remoteResponse = function() {
		
		Ti.API.debug(this.responseText);
		var json = JSON.parse(this.responseText);

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
