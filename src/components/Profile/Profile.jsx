import React, { Fragment } from "react";

import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<Fragment>
			<div className={styles.profile_buttons}>
				<button>Create a playlist</button>
				<button>See your playlists</button>
				<button>See your favorites</button>
			</div>
		</Fragment>
	);
};

export default Profile;
