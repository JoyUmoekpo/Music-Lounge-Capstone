import React from "react";

import styles from "./Information.module.css";

const Information = () => {
	return (
		<div className={styles.information_container}>
			<h1>Tools Used:</h1>
			<h3>HTML</h3>
			<h3>CSS</h3>
			<h3>JSX</h3>
			<h3>React</h3>
			<h3>Redux</h3>
			<h3>JSON Web Tokens</h3>
			<h3>Sequelize</h3>
			<h3>Bit.io</h3>
			<h3>Node.js</h3>
			<h3>Express</h3>
			<h3>Axios</h3>
			<h3>Cors</h3>
			<h3>Unsplash</h3>
			<br />
			<p>
				For any questions, visit the following links to learn or contact me for
				more information:
			</p>
			<p>Github: https://github.com/JoyUmoekpo</p>
			<p>LinkedIn: https://www.linkedin.com/in/joyumoekpo/</p>
		</div>
	);
};

export default Information;
