import React, { Fragment, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/authContext";

import styles from "./Playlist.module.css";

const Playlist = () => {
	const { token, userId } = useContext(AuthContext);
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(
				"http://localhost:4040/playlists",
				{ title, content, userId},
				{
					headers: {
						authorization: token,
					},
				}
			)
			.then(() => {
				navigate("/playlist");
			})
			.catch((err) => console.log(err));
	};

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
