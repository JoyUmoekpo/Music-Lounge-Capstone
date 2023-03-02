import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

import SongCard from "../../UI/SongCard/SongCard";

import styles from "./Searchbar.module.css";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const [songs, setSongs] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [clickedFavorited, setClickedFavorited] = useState(false);

	const url = "http://localhost:4040";

	const submit = () => {
		axios
			.get(`${url}/search/${search}`)
			.then((res) => {
				console.log(res.data.data);
				setSongs(res.data.data);
				setSearch("");
			})
			.then(
				axios
					.get(url + "/favorite/" + localStorage.getItem("userId"))
					.then((res) => {
						console.log(res.data);
						const { data } = res;
						const filteredData = data.map((element) => element.song_id);
						setFavorites(filteredData);
					})
					.catch((err) => {
						console.log(err);
						console.log("Error in getAllFavorites");
					})
			);
	};

	const fetchFavoriteData = useCallback(() => {
		console.log("Fetched");
		setClickedFavorited(true);
		axios
			.get(url + "/favorite/" + localStorage.getItem("userId"))
			.then((res) => {
				console.log("Data Fetched", res.data);
				const { data } = res;
				const filteredData = data.map((element) => element.song_id);
				setFavorites(filteredData);
			})
			.catch((err) => {
				console.log(err);
				console.log("Error in getAllFavorites");
			});
	}, [clickedFavorited]);

	useEffect(() => {
		fetchFavoriteData();
		setClickedFavorited(false);
	}, [fetchFavoriteData]);

	const handleClick = (song_id) => {
		axios
			.post(`${url}/favorite`, {
				song_id,
				userId: localStorage.getItem("userId"),
			})
			.then((res) => {
				fetchFavoriteData();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const songDisplay = songs.map((song) => {
		const isFavorited = favorites.includes(song.id);
		return (
			<SongCard
				song={song}
				key={song.id}
				isFavorited={isFavorited}
				handleClick={handleClick}
			/>
		);
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
			<div className={styles.songs_container}>{songs && songDisplay}</div>
		</div>
	);
};

export default SearchBar;
