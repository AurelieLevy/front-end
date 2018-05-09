const path = require("path")
const apiRouter = require("express").Router()
const db = require("./utils/mongo")
const app = require("./utils/express")
const config = require("config")

const service = require("./service")

apiRouter
    .route("/api/episodes")
    .post(service.add)
    .get(service.get)

app.use(apiRouter)

app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../app/index.html"))
})

db
    .connect(config.get("server.db.uri"), { useMongoClient: true })
    .then(() => {
        app.listen(config.get("server.port"), config.get("server.ip"), function() {
            console.log(
                "Listening at " + config.get("server.ip") + " on port " + config.get("server.port")
            )
            console.log("mongo instance up and running")
        })
    })
    .catch(function(err) {
        console.error("Could not connect to database", err)
        process.exit(0)
    })
