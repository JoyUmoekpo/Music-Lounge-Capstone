import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Favorites.module.css";
const FavoriteCard = ({ song }) => {
	const [favSongs, setfavSongs] = useState([]);

	const baseUrl = "http://localhost:4040";
	console.log(song);

	useEffect(() => {
		getAllFavorites()
	}, []);


	const getAllFavorites = () => {
		axios
			.get(baseUrl + "/favorite/" + song.song_id)
			.then((res) => {
				setfavSongs(res.data);
			})
			.catch((err) => {
				console.log("Error in getAllFavorites");
			});
	}

	const deletePost = id => {
		axios.delete(baseUrl + "/favorite/" +song.id)
				.then(() => {
					console.log("Song deleted");
				})
				.catch(err => {
						console.log(err)
				})
}


	return (
		<div>
			<div className={styles.favorite}>
				<div>{song.id}</div>
				<div>{favSongs.id}</div>
				<div>{favSongs.title}</div>
				<button onClick={() => deletePost()}>Delete</button>
			</div>
		</div>
	);
};

export default FavoriteCard;
