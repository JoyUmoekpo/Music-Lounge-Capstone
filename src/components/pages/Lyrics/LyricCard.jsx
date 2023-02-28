import React from "react";

import styles from "./Lyrics.module.css";

const LyricCard = ({ lyrics }) => {
	const thumbnail = lyrics.thumbnail.genius;
	const title = lyrics.title;
	const author = lyrics.author;
	const lyricText = lyrics.lyrics;
	const link = lyrics.links.genius;

	return (
		<div className={styles.lyrics_card}>
			<div className={styles.card_header}>
				<img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
				<div className={styles.title_author}>
					<h2>{title}</h2>
					<h3>{author}</h3>
				</div>
			</div>
			<div className={styles.card_body}>
				<p>{lyricText}</p>
				<a href={link} rel="noreferrer" target="_blank">Link to Genius Lyrics</a>
			</div>
		</div>
	);
};

export default LyricCard;
