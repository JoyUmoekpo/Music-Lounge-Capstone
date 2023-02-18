import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/authContext";

import styles from "./Header.module.css";

const Header = () => {
	const authCtx = useContext(AuthContext);

	const styleActiveLink = ({ isActive }) => {
		return {
			color: isActive ? "#1CAC78" : "",
		};
	};

	return (
		<header className={`${styles.header} ${styles.row}`}>
			<div className={styles.row}>
				<h2>Welcome</h2>
			</div>
			<nav>
				{authCtx.token ? (
					<ul className={styles.main_nav}>
						<li>
							<NavLink style={styleActiveLink} to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink style={styleActiveLink} to="profile">
								Profile
							</NavLink>
						</li>
						<li>
							<button className={styles.logout_btn} onClick={() => authCtx.logout()}>
								Logout
							</button>
						</li>
					</ul>
				) : (
					<ul className={styles.main_nav}>
						<li>
							<NavLink style={styleActiveLink} to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink style={styleActiveLink} to="/auth">
								Login or Sign Up
							</NavLink>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default Header;