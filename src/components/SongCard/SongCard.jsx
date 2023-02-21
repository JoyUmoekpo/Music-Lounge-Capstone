import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SongCard.module.css";

const SongCard = ({song}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`https://api.deezer.com/search?q=${song}`);
	};

	return (
		<div className={styles.card}>
			<div>
				<div>
					<img
						src={`${song.picture_small}`}
						alt="Snack"
						className={styles.song_image}
					/>
				</div>
				<h3 className={styles.song_text}>{song.title}</h3>
			</div>
			<button onClick={handleClick}>Favorite Song</button>
		</div>
	);
};

export default SongCard;
