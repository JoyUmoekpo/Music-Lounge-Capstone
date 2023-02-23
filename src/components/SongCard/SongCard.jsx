import React from "react";
import { useNavigate } from 'react-router-dom';

import styles from "./SongCard.module.css";

const SongCard = ({song}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/favorites');
	}

	return (
		<div className={styles.card}>
			<div>
				<div>
					<img
						src={song.album.cover_xl}
						alt="Song"
						className={styles.song_image}
					/>
				</div>
				<h3 className={styles.song_text}>{song.title_short}</h3>
				<h3 className={styles.song_text}>{song.artist.name}</h3>
			</div>
			<button className={styles.song_button} onClick={handleClick}>Favorite Song</button>
		</div>
	);
};

export default SongCard;
