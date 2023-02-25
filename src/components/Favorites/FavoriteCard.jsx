import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Favorites.module.css";
const FavoriteCard = ({ song, deleteFavorites }) => {
	const [favSongs, setfavSongs] = useState([]);

	const baseUrl = "http://localhost:4040";
	console.log(song);

	useEffect(() => {
		axios
		.get(baseUrl + "/track/" + song.song_id)
		.then((res) => {
			setfavSongs(res.data);
		})
		.catch((err) => {
			console.log("Error in getAllFavorites");
		});
	}, []);

	return (
		<div>
			<div className={styles.favorite}>
				{song.id} | {favSongs.id} | {favSongs.title} | {song.song_id}
				<button onClick={() => deleteFavorites(song.id)}>Delete</button>
			</div>
		</div>
	);
};

export default FavoriteCard;
