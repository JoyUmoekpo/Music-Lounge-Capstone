const { Playlist } = require("../models/playlist");
const { User } = require("../models/user");

module.exports = {
	getAllPlaylists: async (req, res) => {
		try {
			const playlists = await Playlist.findAll({
				where: {privateStatus: false},
				include: [{
						model: User,
						required: true,
						attributes: [`username`]
				}]
		})
		res.status(200).send(playlists)
} catch (error) {
		console.log('ERROR IN getAllPlaylists')
		console.log(error)
		res.sendStatus(400)
}
},

getCurrentUserPlaylists: async (req, res) => {
	try {
			const {userId} = req.params
			const playlists = await Playlist.findAll({
					where: {userId: userId},
					include: [{
							model: User,
							required: true,
							attributes: [`username`]
					}]})
			res.status(200).send(playlists)
	} catch (error) {
			console.log('ERROR IN getCurrentUserPlaylists')
			console.log(error)
			res.sendStatus(400)
	}
},

	addPlaylist: async (req, res) => {
		try {
				const {title, content, status, userId} = req.body
				await Playlist.create({title, content, privateStatus: status, userId})
				res.sendStatus(200)
		} catch (error) {
				console.log('ERROR IN getCurrentUserPlaylists')
				console.log(error)
				res.sendStatus(400)
		}
},

editPlaylist: async (req, res) => {
	try {
			const {id} = req.params
			const {status} = req.body
			await Playlist.update({privateStatus: status}, {
					where: {id: +id}
			})
			res.sendStatus(200)
	} catch (error) {
			console.log('ERROR IN getCurrentUserPlaylists')
			console.log(error)
			res.sendStatus(400)
	}
},

deletePlaylist: async (req, res) => {
	try {
			const {id} = req.params
			await Playlist.destroy({where: {id: +id}})
			res.sendStatus(200)
	} catch (error) {
			console.log('ERROR IN getCurrentUserPlaylists')
			console.log(error)
			res.sendStatus(400)
	}
}
};
