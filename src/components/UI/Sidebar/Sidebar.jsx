import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../store/authContext";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
	const authCtx = useContext(AuthContext);

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
							<NavLink to="/favorites">
								<button className={styles.sidebar_buttons}>Favorites</button>
							</NavLink>
						</li>
						<li className={styles.sidebar_links}>
							<NavLink to="/lyrics">
								<button className={styles.sidebar_buttons}>Lyrics</button>
							</NavLink>
						</li>
						<li className={styles.sidebar_links}>
							<NavLink to="/news">
								<button className={styles.sidebar_buttons}>
									News
								</button>
							</NavLink>
						</li>
						<li className={styles.sidebar_links}>
							<NavLink to="/information">
								<button className={styles.sidebar_buttons}>
									Information
								</button>
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