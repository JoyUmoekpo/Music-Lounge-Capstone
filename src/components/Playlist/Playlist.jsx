import React, { Fragment } from "react";
import styles from "./Playlist.module.css";

const Playlist = () => {
	return (
		<Fragment>
			<div className={styles.title}>[User's] Playlists</div>
			<div className={styles.playlists_container}>
				<div className={styles.playlists}>Playlist</div>
				<div className={styles.playlists}>Playlist</div>
				<div className={styles.playlists}>Playlist</div>
				<div className={styles.playlists}>Playlist</div>
				<div className={styles.playlists}>Playlist</div>
			</div>
		</Fragment>
	);
};

export default Playlist;
