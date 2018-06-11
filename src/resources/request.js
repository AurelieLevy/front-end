import config from "config"
import "whatwg-fetch"
import "babel-polyfill"

require("es6-promise").polyfill()

const get = (url, headers, callback) => {
    fetch(config.endpoints.api + url, {
        method: "GET",
        headers: { Authorization: "Bearer " + localStorage.getItem("token"), ...headers }
    })
        .then(response => response.text())
        .then(responseText => {
            callback(JSON.parse(responseText))
        })
        .catch(error => console.log(error))
}

const post = (url, body, headers, callback) => {
    fetch(config.endpoints.api + url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    })
        .then(response => response.text())
        .then(responseText => {
            callback(JSON.parse(responseText))
        })
        .catch(error => console.log(error))
}

const put = (url, body, headers, callback) => {
    fetch(config.endpoints.api + url, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    })
        .then(response => response.text())
        .then(responseText => {
            callback(JSON.parse(responseText))
        })
        .catch(error => console.log(error))
}

const remove = (url, headers, callback) => {
    fetch(config.endpoints.api + url, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem("token"), ...headers }
    })
        .then(response => response.text())
        .then(responseText => {
            callback(JSON.parse(responseText))
        })
        .catch(error => console.log(error))
}

const logout = callback => {
    fetch(config.endpoints.api + "logout", {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            callback(response)
        })
        .catch(error => console.log(error))
}

module.exports = {
    get,
    post,
    put,
    remove,
    logout
}
