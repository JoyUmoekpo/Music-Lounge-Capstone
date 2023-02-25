import React, { Fragment, useContext, useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import axios from "axios";
import AuthContext from "../../../store/authContext";

import styles from "./Favorites.module.css";

const Favorites = () => {
	const authCtx = useContext(AuthContext);
	const [favorites, setFavorites] = useState([]);

	const baseUrl = "http://localhost:4040"

	const getAllFavorites = () => {
		axios
			.get(baseUrl + "/favorite")
			.then((res) => {
				setFavorites(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log("Error in getAllFavorites");
			});
	};

	useEffect(() => {
		getAllFavorites();
	}, []);

	
	const deleteFavoritesHandler = (id) => {
		axios
			.delete(baseUrl + "/favorite/" + id)
			.then(() => {
				console.log("Song deleted");
				getAllFavorites();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const mappedFavorites = favorites.map((favorite) => {
		return <FavoriteCard song={favorite} deleteFavorites={deleteFavoritesHandler}/>;
	});

	

	return (
		<Fragment>
			<div className={styles.title}>{authCtx.username}'s Favorite Songs</div>
			{mappedFavorites}
		</Fragment>
	);
};

export default Favorites;
