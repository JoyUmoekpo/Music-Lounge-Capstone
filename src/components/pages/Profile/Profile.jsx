import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../store/authContext";

import SearchBar from "../../UI/Searchbar/Searchbar";

import styles from "./Profile.module.css";

const Profile = () => {
	const authCtx = useContext(AuthContext);

	return (
		<Fragment>
			<div className={styles.profile_position}>
				<h1 className={styles.title}>{authCtx.username}'s Profile Page</h1>
				<div className={styles.profile_button_container}>
					<button className={styles.profile_button}>Create a playlist</button>
					<NavLink to="/playlist">
						<button className={styles.profile_button}>
							See your playlists
						</button>
					</NavLink>
					<NavLink to="/favorites">
						<button className={styles.profile_button}>
							See your favorites
						</button>
					</NavLink>
				</div>
				<SearchBar />
			</div>
		</Fragment>
	);
};

export default Profile;
