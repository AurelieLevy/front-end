module.exports = {
	endpoints: {
		api: "http://0.0.0.0:3000/api/"
	},

	server: {
		port: process.env.NODEJS_PORT || 3000,
		ip: "0.0.0.0",
		db: {
			uri: "mongodb://mongo/tweb"
		}
	}
}
