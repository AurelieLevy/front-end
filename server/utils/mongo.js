const mongoose = require("mongoose")

function connect(dbUrl) {
	mongoose.connect(dbUrl)

	return new Promise(function(resolve, reject) {
		mongoose.connection.on("error", function(err) {
			console.log(err)
			mongoose.disconnect()
			reject(err)
		})

		mongoose.connection.on("open", function() {
			resolve(dbUrl)
		})
	})
}

module.exports = { connect }
