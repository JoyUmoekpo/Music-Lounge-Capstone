import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

import styles from "./Searchbar.module.css";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const [songs, setSongs] = useState([]);

	const url = "http://localhost:4040";

	const submit = () => {
		axios.get(`${url}/search/${search}`).then((res) => {
			console.log(res.data.data);
			setSongs(res.data.data);
		});
	};

	const songDisplay = songs.map((song) => {
		return <SongCard song={song} />;
	});

	return (
		<div>

			<div className={styles.search}>
				<BiSearch className={styles.search_icon} color="#fff" />
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search for a song or artist"
					className={styles.search_bar}
				/>
				<button className={styles.search_button} onClick={submit}>
					Submit
				</button>
			</div>
			<div className={styles.songs_container}>
				<div> {songs && songDisplay}</div>
			</div>

		</div>
	);
};

export default SearchBar;
