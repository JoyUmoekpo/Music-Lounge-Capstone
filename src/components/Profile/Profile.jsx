import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<Fragment>
			<div className={styles.title}>[User's] Profile Page</div>
			<div className={styles.profile_button_container}>
				<button className={styles.profile_button}>Create a playlist</button>
				<NavLink to="/playlist">
					<button className={styles.profile_button}>See your playlists</button>
				</NavLink>
				<NavLink to="/favorites">
					<button className={styles.profile_button}>See your favorites</button>
				</NavLink>
			</div>
		</Fragment>
	);
};

export default Profile;
