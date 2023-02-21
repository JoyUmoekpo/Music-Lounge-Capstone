import React, { Fragment } from "react";
import styles from "./Playlist.module.css";

const Playlist = () => {
	return (
		<Fragment>
			<div className={styles.title}>[User's] Playlists</div>
			<button className={styles.playlist_button}>Create a playlist</button>
			<div className={styles.playlists_container}>
			</div>
		</Fragment>
	);
};

export default Playlist;
