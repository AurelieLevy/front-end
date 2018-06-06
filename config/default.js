module.exports = {
    env: "production",

    endpoints: {
        api: "http://0.0.0.0:3000/api/"
    },

    server: {
        port: 8080,
        ip: "127.0.0.1",
        db: {
            uri: "mongodb://127.0.0.1/tweb"
        }
    }
}
