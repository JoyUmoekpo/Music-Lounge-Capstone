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
			{/* <img src={logo} alt='dm-logo' className='logo'/> */}
			<mark>[Logo]</mark>
			</div>
			<nav>
				{authCtx.token ? (
					<ul className={styles.main_nav}>
						<li>
							<div>{authCtx.username}</div>
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
								Register
							</NavLink>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default Header;