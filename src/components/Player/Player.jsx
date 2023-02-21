import React, { Fragment } from "react";

import styles from "./Player.module.css";

const Player = () => {
	return (
		<Fragment>
			<div className={styles.title}>Player</div>
			<div className={styles.player_container}></div>
		</Fragment>
	);
};

export default Player;
