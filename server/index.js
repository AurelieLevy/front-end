const path = require("path")
const app = require("./utils/express")
const config = require("config")

app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../app/index.html"))
})

app.listen(config.get("server.port"), config.get("server.ip"), function() {
    console.log("Listening at " + config.get("server.ip") + " on port " + config.get("server.port"))
})
