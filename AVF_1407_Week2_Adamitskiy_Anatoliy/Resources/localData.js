/*	This is where the SQLite
 * 	statements are housed
 */

var windowWidth = Ti.Platform.displayCaps.platformWidth;
var windowHeight = Ti.Platform.displayCaps.platformHeight;
var platform = Ti.Platform.osname;

var cloudData = require("cloudData");

//Opening my SQLite Database

var db = Titanium.Database.open("database");
db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, image TEXT, avatar TEXT, title TEXT, name TEXT, likes TEXT, views TEXT, comments TEXT)");

//Inserting columns and data into database

exports.insert = function(image1, avatar1, title1, name1, likes1, views1, comments1) {
	var db = Titanium.Database.open("database");
	db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, image TEXT, avatar TEXT, title TEXT, name TEXT, likes TEXT, views TEXT, comments TEXT)");
	db.execute("INSERT INTO database (image, avatar, title, name, likes, views, comments) VALUES (?,?,?,?,?,?,?)", image1, avatar1, title1, name1, likes1, views1, comments1);
};

//Function that grabs the data to populate UI

exports.getData = function() {
	var posts = db.execute("SELECT * FROM database");
	var dataA = [];
	var dataAv = [];

	while (posts.isValidRow()) {

		var data = {};
		data.id = posts.fieldByName("id");
		data.image = posts.fieldByName("image");
		data.avatar = posts.fieldByName("avatar");
		data.title = posts.fieldByName("title");
		data.name = posts.fieldByName("name");
		data.likes = posts.fieldByName("likes");
		data.views = posts.fieldByName("views");
		data.comments = posts.fieldByName("comments");

		dataA.push(data.image);
		dataAv.push(data.avatar);

		console.log(data.image);
		
		posts.next();
	}
	console.log(dataAv);

	for ( i = 0, j = dataA.length; i < j; i++) {

		var image = Ti.UI.createImageView({
			backgroundColor : "white",
			image : dataA[i],
			width : windowWidth,
			height : "250dp",
			top : "30dp"
		});

		if (platform === 'android') {
			image.width = windowWidth / 3;
			image.height = '300dp';
		}

		var picInfoBack = Ti.UI.createView({
			backgroundImage : "",
			top : 20,
			width : windowWidth,
			height : 250,
			children: [image]
		});

		var avatarImage = Ti.UI.createImageView({
			borderRadius : 20,
			backgroundColor : "#fff",
			borderWidth : 1,
			borderColor : "#dddbdb",
			width : 40,
			height : 40,
			top : 7,
			left : 7,
			image : dataAv[i]
		});

		ui.scrollView.add(picInfoBack);
		picInfoBack.add(avatarImage);

	}
};

//Function that clears SQLite database

exports.destroy = function() {
	db.execute("DELETE FROM database");
};