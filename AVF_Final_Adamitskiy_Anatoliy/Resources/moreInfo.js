var windowWidth = Ti.Platform.displayCaps.platformWidth;

exports.openMoreInfo = function() {
	
	ui.backButton.addEventListener("click", function() {
		ui.moreInfoWindow.close();
	});

	ui.navBar2.add(ui.backButton);
	ui.moreInfoWindow.add(ui.navBar2);
	ui.moreInfoWindow.open();
};

