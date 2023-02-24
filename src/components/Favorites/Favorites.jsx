import React, { Fragment, useContext, useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import axios from "axios";
import AuthContext from "../../store/authContext";

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

	const mappedFavorites = favorites.map((favorite) => {
		return <FavoriteCard song={favorite} />;
	});

	return (
		<Fragment>
			<div className={styles.title}>{authCtx.username}'s Favorite Songs</div>
			{mappedFavorites}
		</Fragment>
	);
};

export default Favorites;
