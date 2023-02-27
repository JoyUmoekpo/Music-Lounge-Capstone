import React, { useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

import styles from "./SongCard.module.css";

const SongCard = ({ song }) => {
	const url = "http://localhost:4040";
	const [isFavorited, setIsFavorited] = useState(false);

	const handleClick = (song_id) => {
		axios
			.post(`${url}/favorite`, {
				song_id,
				userId: localStorage.getItem("userId"),
			})
			.then((res) => {
				console.log(res.data);
				alert("Song has been added to favorites");
				setIsFavorited(true);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div className={styles.card} key={song.id}>
			<div>
				<div>
					<img
						src={song.album.cover_xl}
						alt="Song"
						className={styles.song_image}
					/>
				</div>
				<h3 className={styles.song_text}>Title: {song.title_short}</h3>
				<h3 className={styles.song_text}>Artist: {song.artist.name}</h3>
			</div>
			<button
				className={styles.song_button}
				onClick={() => handleClick(song.id)}
				disabled={isFavorited}
			>
				{isFavorited ? "Favorited" : "Favorite Song"}
			</button>
			<div className={styles.react_player}>
				<ReactPlayer
					url={song.preview}
					width="200px"
					height="25px"
					playing={false}
					controls={true}
					volume={0.3}
				/>
			</div>
		</div>
	);
};

export default SongCard;
