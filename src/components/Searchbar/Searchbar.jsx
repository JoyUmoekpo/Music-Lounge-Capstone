import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

import styles from "./Searchbar.module.css";

const SearchBar = ({ songs }) => {
	const [search, setSearch] = useState("");

	const url = "http://localhost:4040";
	
	const submit = () => {
		console.log(search);
			axios
			.get(`${url}/search/${search}`)
			.then((res) => {
				console.log(res, 'onSubmit triggered')
				});
	}

	const songDisplay = songs
		.filter((song, index) => {
			let title = song.title.toLowerCase();
			let searchParams = search.toLowerCase();
			return title.includes(searchParams);
		})
		.map((song, index) => {
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
			</div>
			<button className={styles.search_button} onClick={submit}>Submit</button>
			<div className={styles.songs_container}>{songDisplay}</div>
		</div>
	);
};

export default SearchBar;
