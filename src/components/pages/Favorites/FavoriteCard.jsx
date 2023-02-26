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
	}, [song.song_id]);

	return (
		<div>
			<div className={styles.favorites_container}>
				<div className={styles.favorite}>
					<span>{favSongs.id} </span>
					<span> | </span>
					<span>{favSongs.title_short} </span>
					<span> | </span>
					<span>{(+favSongs.duration / 60).toFixed(0)} minutes</span>
					<span> |</span>
					<button
						onClick={() => deleteFavorites(song.id)}
						className={styles.favorite_button}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default FavoriteCard;
