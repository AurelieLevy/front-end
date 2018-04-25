const Episode = require("./models/Episode")

module.exports = {
	add: (req, res) => {
		const episode = new Episode(req.body)
		episode.save().then(data => {
			res.status(201).json({ ok: true, data })
		}).catch(err => {
			res.status(403).json({ ok: false, err })
		})
	},

	get: (req, res) => {
		Episode.find().then(data => {
			res.status(200).json({ ok: true, data })
		}).catch(err => {
			res.status(403).json({ ok: false, err })
		})
	}
}