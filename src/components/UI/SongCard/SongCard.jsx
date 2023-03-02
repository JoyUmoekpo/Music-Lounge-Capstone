import React, { useState } from "react";
import ReactPlayer from "react-player";

import styles from "./SongCard.module.css";

const SongCard = ({ song, isFavorited, handleClick }) => {
	const url = "http://localhost:4040";
	// const [favorited, setFavorited] = useState(isFavorited);

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
				type="button"
				className={styles.song_button}
				onClick={() => handleClick(song.id)}
				disabled={isFavorited}>
				{isFavorited ? "Remove From Favorites" : "Add to Favorites"}
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
