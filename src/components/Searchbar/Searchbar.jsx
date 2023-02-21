import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import { BiSearch } from "react-icons/bi";

import styles from "./SearchBar.module.css";

const SearchBar = ({ songs }) => {
	const [search, setSearch] = useState("");

	const songDisplay = songs
		.filter((song, index) => {
			let title = song.song_name.toLowerCase();
			let searchParams = search.toLowerCase();
			return title.includes(searchParams);
		})
		.map((song, index) => {
			return <songCard song={song} />;
		});

	return (
		<div>
			<div className={styles.search}>
				<BiSearch className={styles.search_icon} color="#DA7635"/>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search for a song"
					className={styles.search_bar}
				/>
			</div>
			<div className={styles.songs_container}>
        {songDisplay}
      </div>
		</div>
	);
};

export default SearchBar;
