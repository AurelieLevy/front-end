const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const express = require("express")
const app = express()

app
	.use(express.static("app"))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*")
		res.header("Access-Control-Allow-Credentials", true)
		res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
		res.header(
			"Access-Control-Allow-Headers",
			"X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Token"
		)
		next()
	})
	.use(methodOverride())

module.exports = app
