 import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/authContext";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
	const authCtx = useContext(AuthContext);

	// const styleActiveLink = ({ isActive }) => {
	// 	return {
	// 		backgroundColor: isActive ? "#000" : "",
	// 	};
	// };
	// style={styleActiveLink}

	return (
		<div className={styles.sidebar}>
			<nav>
				{authCtx.token ? (
					<ul className={styles.sidebar_contents}>
						<li className={styles.sidebar_links}>
							<NavLink to="/profile">
								<button className={styles.sidebar_buttons}>Profile</button>
							</NavLink>
						</li>
						<li className={styles.sidebar_links}>
							<NavLink to="/playlist">
								<button className={styles.sidebar_buttons}>Playlist</button>
							</NavLink>
						</li>
						<li className={styles.sidebar_links}>
							<NavLink to="/favorites">
								<button className={styles.sidebar_buttons}>Favorites</button>
							</NavLink>
						</li>
						<li className={styles.sidebar_links}>
							<NavLink to="/player">
								<button className={styles.sidebar_buttons}>Player</button>
							</NavLink>
						</li>
						<li className={styles.sidebar_links}>
							<NavLink to="/recommendations">
								<button className={styles.sidebar_buttons}> Recommendations</button>
							</NavLink>
						</li>
					</ul>
				) : (
					""
				)}
			</nav>
		</div>
	);
};

export default Sidebar;
