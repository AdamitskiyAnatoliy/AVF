/*	This is where the SQLite
 * 	statements are housed
 */

//Opening my SQLite Database

var db = Titanium.Database.open("database");
db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, e BLOB)");


exports.insert = function(json) {
	db.execute("INSERT INTO database (e) VALUES (?)" , json);
};

// 
// exports.getRows = function() {
	// db.execute("SELECT * FROM database");
// };
// 
// 
// exports.update = function(current) {
	// db.execute("INSERT INTO database (current) VALUES(?)", current);
// };
// 
	// This function deletes a selected row from the
	// database
// exports.destroy = function(id) {
	// db.execute("DELETE FROM database WHERE id = ?", id);	
// };	