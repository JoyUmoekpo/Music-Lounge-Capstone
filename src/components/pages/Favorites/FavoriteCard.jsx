import axios from "axios";
import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
	setLoadingFalse,
	setLoadingTrue,
} from "../../../redux/slices/loadingSlice";

import styles from "./Favorites.module.css";

const FavoriteCard = ({ song, deleteFavorites }) => {
	const [favSongs, setfavSongs] = useState([]);
	const [artist, setArtist] = useState({});
	const [album, setAlbum] = useState({})
	const dispatch = useDispatch();

	const baseUrl = "http://localhost:4040";

	useEffect(() => {
		axios
			.get(baseUrl + "/track/" + song.song_id)
			.then((res) => {
				dispatch(setLoadingTrue());
				setfavSongs(res.data);
				setArtist(res.data.artist);
				setAlbum(res.data.album);
				dispatch(setLoadingFalse());
			})
			.catch((err) => {
				console.log("Error in getAllFavorites");
				dispatch(setLoadingFalse());
			});
	}, [song.song_id, dispatch]);

	return (
		<div>
			<div className={styles.favorites_container}>
				<div className={styles.favorite}>
					<span>
						<img
							src={album.cover_medium}
							alt="Album cover"
							className={styles.favorite_image}
						/>
					</span>
					<span> | </span>
					<span>{favSongs.title_short} </span>
					<span> | </span>
					<span>{artist.name}</span>
					<span> | </span>
					{/* <span>{favSongs.id} </span>		
					<span> | </span>
					<span>{favSongs.id} </span>	
					<span> | </span>
					<span>{favSongs.id} </span>	
					<span> | </span>
					<span>{favSongs.id} </span>	
					<span> | </span>
					<span>{favSongs.id} </span>	
							 */}
					<button
						onClick={() => deleteFavorites(song.id)}
						className={styles.favorite_button}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default FavoriteCard;
