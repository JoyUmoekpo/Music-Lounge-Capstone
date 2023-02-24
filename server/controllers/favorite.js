const { PlaylistSongs } = require("../models/playlists_songs");


module.exports = {
	favorite: async (req, res) => {
		try {
			const { song_id, userId } = req.body;
			await PlaylistSongs.create({ song_id, userId });
			res.sendStatus(200);
			console.log(req.body);
		} catch (error) {
			console.log(error.message);
		}
	},
};
