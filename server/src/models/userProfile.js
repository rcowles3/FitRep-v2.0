var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
	
	userName: {
		type: String,
		required: true
	},

	age: {
		type: Number,
		required: true
	},

	height: {
		type: String,
		required: true
	},

	weight: {
		type: Number,
		required: true
	},

	gender: {
		type: String, 
		required: true
	}

});

var Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile; 