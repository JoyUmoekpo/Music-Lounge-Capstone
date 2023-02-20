import React, { Fragment } from "react";

import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<Fragment>
			<div className={styles.profile_button_container}>
				<button className={styles.profile_button}>Create a playlist</button>
				<button className={styles.profile_button}>See your playlists</button>
				<button className={styles.profile_button}>See your favorites</button>
			</div>
		</Fragment>
	);
};

export default Profile;
