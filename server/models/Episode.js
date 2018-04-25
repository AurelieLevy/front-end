const mongoose = require("mongoose"),
	Schema = mongoose.Schema

const episodeSchema = new Schema({
	id: Number,
	url: String,
	name: String,
	season: Number,
	number: Number,
	airdate: String,
	airtime: String,
	airstamp: Date,
	runtime: Number,
	image: {
		medium: String,
		original: String
	},
	summary: String
})

module.exports = mongoose.model("Episode", episodeSchema)
