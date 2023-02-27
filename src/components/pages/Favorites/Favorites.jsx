import axios from "axios";
import React, { Fragment, useContext, useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import AuthContext from "../../../store/authContext";
import { useDispatch } from "react-redux";
import {
	setLoadingFalse,
	setLoadingTrue,
} from "../../../redux/slices/loadingSlice";

import styles from "./Favorites.module.css";

const Favorites = () => {
	const authCtx = useContext(AuthContext);
	const [favorites, setFavorites] = useState([]);
	const dispatch = useDispatch();

	const baseUrl = "http://localhost:4040";

	const getAllFavorites = () => {
		axios
			.get(baseUrl + "/favorite")
			.then((res) => {
				console.log(res.data);
				setFavorites(res.data);
				dispatch(setLoadingFalse());
			})
			.catch((err) => {
				console.log(err);
				console.log("Error in getAllFavorites");
				dispatch(setLoadingFalse());
			});
	};

	useEffect(() => {
		dispatch(setLoadingTrue());
		getAllFavorites();
	}, [dispatch]);

	const deleteFavoritesHandler = (id) => {
		axios
			.delete(baseUrl + "/favorite/" + id)
			.then(() => {
				dispatch(setLoadingTrue());
				getAllFavorites();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const mappedFavorites = favorites.map((favorite) => {
		return (
			<FavoriteCard song={favorite} deleteFavorites={deleteFavoritesHandler} />
		);
	});

	return (
		<Fragment>
			<div className={styles.favorites_position}>
				<div className={styles.title}>{authCtx.username}'s Favorite Songs</div>
				<div className={styles.favorites_labels}>
					<span>Album Cover</span>
					<span>|</span>
					<span>Song</span>
					<span>|</span> <span>Artist</span>
					<span>|</span>
				</div>
				{mappedFavorites}
			</div>
		</Fragment>
	);
};

export default Favorites;
