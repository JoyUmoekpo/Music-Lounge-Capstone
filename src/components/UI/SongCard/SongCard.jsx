import React from "react";
import ReactPlayer from 'react-player'
import axios from "axios";


import styles from "./SongCard.module.css";

const SongCard = ({song}) => {
	const url = "http://localhost:4040";
	
	const handleClick = (song_id) => {
		// console.log(localStorage.getItem('userId'));
	axios.post(`${url}/favorite`, {song_id, user_id: localStorage.getItem('userId')})
	.then((res) => {
		console.log(res.data);

	}).catch((err) => {
		console.log(err.message);
	})
	}

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
				<h3 className={styles.song_text}>{song.title_short}</h3>
				<h3 className={styles.song_text}>{song.artist.name}</h3>
			</div>
			<button className={styles.song_button} onClick={() => handleClick(song.id)}>Favorite Song</button>

			<ReactPlayer
        url={song.preview}
        width="200px"
        height="25px"
        playing={false}
        controls={true}
				volume={0.3}
      />
		</div>
	);
};

export default SongCard;
