import React, { Fragment, useState } from "react";
import LyricCard from "./LyricCard";
import axios from "axios";

import styles from "./Lyrics.module.css";

const Lyrics = () => {
	const [search, setSearch] = useState("");
	const [title, setTitle] = useState([]);

	const url = "http://localhost:4040";

	const lyricSearch = (e) => {
		e.preventDefault();

		axios
			.get(`${url}/lyrics/${search}`)
			.then((res) => {
				console.log(res.data);
				setTitle([res.data]);
				setSearch("");
			})
			.catch((err) => {
				console.log(err);
				console.log("Error in lyricSearch");
			});
	};

	const mappedLyrics = title.map((lyric) => {
		return <LyricCard lyrics={lyric} />;
	});

	return (
		<Fragment>
			<div className={styles.lyrics_position}>
				<h1 className={styles.title}>Search for Lyrics</h1>
				<div className={styles.lyric_form}>
					<form onSubmit={lyricSearch}>
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Enter a song title and artist"
							className={styles.lyric_input}
						/>
						<button className={styles.lyric_button}>Submit</button>
					</form>
				</div>
				<div className={styles.lyrics_container}>{mappedLyrics}</div>
			</div>
		</Fragment>
	);
};

export default Lyrics;
