import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

import styles from "./Searchbar.module.css";

const SearchBar = ({ songs }) => {
	const [search, setSearch] = useState("");

	const url = "http://localhost:4040";
	
	const submit = (songs) => {
		axios
		.get(`${url}/search/${search}`)
		.then((res) => {
			console.log(search);
			// console.log(res.data);
				console.log(res.data.data);
				console.log(res.data.data[0].artist.name);
				console.log(res.data.data[0].title_short);
				console.log(res.data.data[1].title_short);
				console.log(res.data.data[2].title_short);
				console.log(res.data.data[3].title_short);
				console.log(res.data.data[4].title_short);
				console.log(res.data.data[5].title_short);
				console.log(res.data.data[6].title_short);
				console.log(res.data.data[7].title_short);

				console.log(res.data.data[0].album.cover);
				// setSearch("");
			});
	}

// Try post request
const handleClick = () => {
	const container = document.querySelector('.song_contianer')
	const hello = "hello";
	
	
}

	const songDisplay = songs
		.map((song) => {
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
			<button className={styles.search_button} onClick={submit}>Submit</button>
			</div>
			<div className={styles.songs_container}><SongCard /></div>
		</div>
	);
};

export default SearchBar;
