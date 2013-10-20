var mongoose = require('mongoose');

mongoose.connect('mongodb://nowhere.com/try-mongoose');

var connection = mongoose.connection;
connection.on('error', function() {
    console.log('mongodb connection error.');
    process.exit(1);
});
