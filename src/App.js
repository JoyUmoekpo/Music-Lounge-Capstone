import "./App.css";

import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";
import Header from "./components/UI/Header/Header";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Footer from "./components/UI/Footer/Footer";
import Profile from "./components/pages/Profile/Profile";
import Playlist from "./components/pages/Playlist/Playlist";
import Favorites from "./components/pages/Favorites/Favorites";
import Player from "./components/pages/Player/Player";
import Recommendations from "./components/pages/Recommendations/Recommendations";

import AuthContext from "./store/authContext";

const App = () => {
	const authCtx = useContext(AuthContext);

	return (
		<div className="app">
			<Header />
			<Sidebar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/auth"
					element={!authCtx.token ? <Auth /> : <Navigate to="/" />}
				/>
				<Route
					path="/profile"
					element={authCtx.token ? <Profile /> : <Navigate to="/auth" />}
				/>
				<Route
					path="/playlist"
					element={authCtx.token ? <Playlist /> : <Navigate to="/auth" />}
				/>

				<Route
					path="/favorites"
					element={authCtx.token ? <Favorites /> : <Navigate to="/auth" />}
				/>

				<Route
					path="/player"
					element={authCtx.token ? <Player /> : <Navigate to="/auth" />}
				/>
				<Route
					path="/recommendations"
					element={
						authCtx.token ? <Recommendations /> : <Navigate to="/auth" />
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;