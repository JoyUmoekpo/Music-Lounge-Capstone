require("dotenv").config();

const { PORT } = process.env;

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { register, login } = require("./controllers/auth");
const { getSongResults, getOneSong, getNews } = require("./controllers/search");
const { addFavorite, getFavorites, deleteFavorites } = require("./controllers/favorites");


const { User } = require("./models/user");
const { Favorites } = require("./models/favorites");
// const Playlist = require("./models/playlist");

const app = express();

app.use(express.json());
app.use(cors());

User.hasMany(Favorites);
Favorites.belongsTo(User);
// User.hasMany(Playlist)
// Playlist.belongsTo(User);

app.post("/register", register);
app.post("/login", login);
app.get("/search/:search_item", getSongResults );
app.post("/favorite", addFavorite);
app.get("/favorite/:id", getFavorites);
app.get("/track/:id", getOneSong)
app.get("/everything/:news_item", getNews)
app.delete("/favorite/:id", deleteFavorites)


sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Connection successful. Server running on port ${PORT}`)
		);
	})
	.catch((err) => console.log(err));