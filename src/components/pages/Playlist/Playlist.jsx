import React, { Fragment, useContext } from "react";

import AuthContext from "../../../store/authContext";

import styles from "./Playlist.module.css";

const Playlist = () => {
	const authCtx = useContext(AuthContext);

	return (
		<Fragment>
			<div className={styles.playlist_position}>
			<div className={styles.title}>{authCtx.username}'s Playlists</div>
			<button className={styles.playlist_button}>Create a playlist</button>
			<div className={styles.playlists_container}>
			</div>
			</div>

		</Fragment>
	);
};

export default Playlist;