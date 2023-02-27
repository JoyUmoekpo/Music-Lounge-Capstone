import React from "react";

import styles from "./Lyrics.module.css";

const LyricCard = (lyrics) => {
	return (
		<div className={styles.lyric_container}>
			<div className={styles.lyric_section}>
				{/* <div className={styles.lyric_labels}>Artist</div> */}
				<div className={styles.lyric_info}>{lyrics.requestedartist}</div>
			</div>

			<div className={styles.lyric_section}>
				{/* <div className={styles.lyric_labels}>Title</div> */}
				{/* <div className={styles.lyric_info}>{lyrics.requestedtitle}</div> */}
			</div>

			<div className={styles.lyric_section}>
				{/* <div className={styles.lyric_labels}>Lyrics:</div> */}
				<div className={styles.lyric_info}>{lyrics.lyrics}</div>
			</div>
		</div>
	);
};

export default LyricCard;