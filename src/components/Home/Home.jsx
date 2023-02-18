import React from "react";
import background from "../../assets/headphones.jpg";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				height: "85vh",
			}}>
			<div className={styles.home_text}>
				<main className={styles.home_text_background}>
					Welcome to my React App
				</main>
			</div>
			<div className={styles.home_text}>
				<summary className={styles.home_text_background}>
					App Description
				</summary>
			</div>
		</div>
	);
};

export default Home;
