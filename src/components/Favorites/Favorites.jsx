import React, { Fragment, useContext } from "react";
import AuthContext from "../../store/authContext";

import styles from "./Favorites.module.css";

const Favorites = () => {
	const authCtx = useContext(AuthContext);

	return (
		<Fragment>
			<div className={styles.title}>{authCtx.username}'s Favorite Songs</div>
			<div className={styles.favorites_container}>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
				<div className={styles.favorite}>Favorite Song</div>
			</div>
		</Fragment>
	);
};

export default Favorites;
