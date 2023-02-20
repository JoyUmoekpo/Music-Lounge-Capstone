import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/authContext";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
	const authCtx = useContext(AuthContext);

	const styleActiveLink = ({ isActive }) => {
		return {
			backgroundColor: isActive ? "#000" : "",
		};
	};

	return (
		<div className={styles.sidebar}>
			<nav>
				{authCtx.token ? (
					<ul>
						<li>
							<NavLink style={styleActiveLink} to="profile">
								Profile
							</NavLink>
						</li>
						<li>
							<NavLink style={styleActiveLink} to="playlist">
								Playlists
							</NavLink>
						</li>
						<li>
							<NavLink style={styleActiveLink} to="favorites">
								Favorites
							</NavLink>
						</li>
					</ul>
				) : (
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				)}
			</nav>
		</div>
	);
};

export default Sidebar;
