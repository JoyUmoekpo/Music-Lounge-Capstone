import React, { Fragment } from "react";
import { useContext } from "react";
import AuthContext from "../../../store/authContext";
import Profile from "../Profile/Profile"

import background from "../../../assets/headphones.jpg";
import styles from "./Home.module.css";

const Home = () => {
	const authCtx = useContext(AuthContext);

	return (
		<Fragment>
			{!authCtx.token ? (
		<div
			style={{
				backgroundImage: `url(${background})`,
				objectFit: 'contain',
				height: "95vh",
				width: "100vw"
			}}>
			<div className={styles.home_text}>
				<main className={styles.home_text_background}>
					Welcome to Music Lounge
				</main>
			</div>

			<div className={styles.home_text}>
				<summary className={styles.home_text_background}>
					A Music Hot Spot
				</summary>
			</div>
		</div>) : (<Profile />)}
		</Fragment>
	);
};

export default Home;
