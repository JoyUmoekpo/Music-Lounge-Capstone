import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Searchbar from '../Searchbar/Searchbar'

import styles from "./Profile.module.css";

const Profile = () => {
	const [songs, setSongs] = useState([]);

	// let url = "https://api.deezer.com/search?q=kehlani"
	// let url = "https://api.deezer.com/search/kehlani"
	let url = "https://api.deezer.com"

	const getSongs = () => {
		axios.get(url).then((res) => {
			setSongs(res.data);
			console.log(res.data);
		});
	};

	useEffect(() => {
		getSongs();
	}, []);

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
				{/* Add button for Player */}
			</div>
			<Searchbar songs={songs}/>
		</Fragment>
	);
};

export default Profile;
