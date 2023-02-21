require("dotenv").config();

const { PORT } = process.env;

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { register, login } = require("./controllers/auth");
const { getAllPlaylists, getCurrentUserPlaylists, addPlaylist, deletePlaylist} = require("./controllers/playlists");
const search = require("./controllers/search");

const { isAuthenticated } = require("./middleware/isAuthenticated");
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
app.get("/user_playlists/:userId", getCurrentUserPlaylists);
app.post("/playlists", isAuthenticated, addPlaylist);
app.delete("/playlists/:id", isAuthenticated, deletePlaylist);
app.get("/search/:search_item", search);

sequelize
	.sync({ force: true })
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Connection successful. Server running on port ${PORT}`)
		);
	})
	.catch((err) => console.log(err));
