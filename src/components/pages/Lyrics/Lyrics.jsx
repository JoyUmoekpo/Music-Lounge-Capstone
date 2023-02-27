import React, { Fragment } from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";

import styles from "./Lyrics.module.css";

const Lyrics = () => {
	return (
		<Fragment>
			<div className={styles.player_position}>
				<div className={styles.title}>Player</div>
				<div className={styles.player_container}>
					<div className={styles.player_icons}>
						<BiPlayCircle size={50} />
						<BiPauseCircle size={50} />
					</div>
					<div>Song information</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Lyrics;