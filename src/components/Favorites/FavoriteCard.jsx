import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Favorites.module.css";
const FavoriteCard = ({ song }) => {
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
				console.log("Error in getSongInfo");
			});
	}, [song.song_id]);

	return (
		<div>
			<div className={styles.favorite}>
				<div>{song.id}</div>
				<div>{favSongs.id}</div>
				<div>{favSongs.title}</div>
			</div>
		</div>
	);
};

export default FavoriteCard;
