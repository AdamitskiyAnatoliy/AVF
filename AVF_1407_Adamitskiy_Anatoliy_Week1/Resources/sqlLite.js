//	Opening my SQLite Database
var db = Titanium.Database.open("database");
db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, current TEXT)");


//	This is the big function that creates and gets the
//	data to populate the mainWindow
exports.getRows = function() {
	db.execute("SELECT * FROM database");
};


exports.update = function(current) {
	db.execute("INSERT INTO database (current) VALUES(?)", current);
};