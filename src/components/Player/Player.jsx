import React, { Fragment } from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";

import styles from "./Player.module.css";

const Player = () => {
	return (
		<Fragment>
			<div className={styles.title}>Player</div>
			<div className={styles.player_container}>
				<div className={styles.player_icons}>
					<BiPlayCircle size={50} />
					<BiPauseCircle size={50} />
				</div>
				<div>Song information</div>
			</div>
		</Fragment>
	);
};

export default Player;
