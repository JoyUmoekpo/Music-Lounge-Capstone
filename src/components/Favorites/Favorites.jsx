import React, { Fragment } from "react";

import styles from "./Favorites.module.css";

const Favorites = () => {
	return (
		<Fragment>
			<div className={styles.title}>[User's] Favorite Songs</div>
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
