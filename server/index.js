require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const { PORT } = process.env;
const { sequelize } = require("./util/database");
const { register, login } = require("./controllers/auth");
const { isAuthenticated } = require("./middleware/isAuthenticated");
const {
	getAllPlaylists,
	getCurrentUserPlaylists,
	addPlaylist,
	deletePlaylist,
} = require("./controllers/playlists");
const { User } = require("./models/user");
const { Playlist } = require("./models/playlist");

const app = express();

app.use(express.json());
app.use(cors());

User.hasMany(Playlist);
Playlist.belongsTo(User);

app.post("/register", register);
app.post("/login", login);
app.get("/playlists", getAllPlaylists);
app.get("/userplaylists/:userId", getCurrentUserPlaylists);
app.post("/playlists", isAuthenticated, addPlaylist);
app.delete("/playlists/:id", isAuthenticated, deletePlaylist);


app.get("/search/:search_item", (req, res) => {
	const title = req.params.search_item;

	axios
		.get(`https://api.deezer.com/search?q=${title}`)
		.then((response) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Access-Control-Allow-Methods", "*");
			res.setHeader("Access-Control-Allow-Header", "*");
			res.send(response.data);
		})
		.catch();
});

sequelize
	.sync({ force: true })
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Connection successful. Server running on port ${PORT}`)
		);
	})
	.catch((err) => console.log(err));
