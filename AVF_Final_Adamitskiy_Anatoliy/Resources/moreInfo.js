var windowWidth = Ti.Platform.displayCaps.platformWidth;
var platform = Ti.Platform.osname;

exports.openMoreInfo = function() {

	ui.backButton.addEventListener("click", function() {
		ui.moreInfoWindow.close();
	});

	ui.navBar2.add(ui.backButton);
	if (platform === "iphone") {
		ui.moreInfoWindow.add(ui.navBar2);
	}
	ui.moreInfoWindow.open();
}; 