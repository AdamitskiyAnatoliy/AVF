// Module that gets the Geolocation of the user

var Map = require('ti.map');
var data = require('data');

if (platform === 'iphone') {

	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

	Titanium.Geolocation.purpose = "Application needs your location to display accurate results.";

	Titanium.Geolocation.distanceFilter = 1;

	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.error) {
			alert('Cannot get your current location');
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;

		data.getData(latitude, longitude);
	});

	exports.addMap = function(lat, lng, name, city) {

		var view = Map.createAnnotation({
			latitude : lat,
			longitude : lng,
			title : name,
			subtitle : city,
			pincolor : Map.ANNOTATION_RED,
			myid : 1
		});

		var mapview = Map.createView({
			mapType : Map.NORMAL_TYPE,
			region : {
				latitude : lat,
				longitude : lng,
				latitudeDelta : 0.01,
				longitudeDelta : 0.01
			},
			animate : true,
			regionFit : true,
			userLocation : true,
			top : 65,
			height : 320,
			annotations : [view]
		});

		ui.moreInfoWindow.add(mapview);

		mapview.addEventListener('click', function(evt) {
			Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
		});

	};

} else {

	Titanium.Geolocation.purpose = "Application needs your location to display accurate results.";

	Titanium.Geolocation.distanceFilter = 1;

	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.error) {
			alert('Cannot get your current location');
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;

		data.getData(latitude, longitude);
	});

	exports.addMap2 = function(lat, lng, name, city) {

		var view = Map.createAnnotation({
			latitude : lat,
			longitude : lng,
			title : name,
			subtitle : city,
			pincolor : Map.ANNOTATION_RED,
			myid : 1
		});

		var map1 = Map.createView({
			userLocation : true,
			mapType : Map.NORMAL_TYPE,
			animate : true,
			region : {
				latitude : 28.591579,
				longitude : -81.304762,
				latitudeDelta : 0.1,
				longitudeDelta : 0.1
			},
			height : '66%',
			top : 0,
			left : 0,
			width : '100%',
			annotations : [view]
		});
		ui.moreInfoWindow.add(map1);
	};

}
