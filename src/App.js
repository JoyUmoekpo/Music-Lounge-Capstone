import "./App.css";

import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectLoading } from "./redux/slices/loadingSlice";
import { useSelector } from "react-redux";

import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";
import Header from "./components/UI/Header/Header";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Footer from "./components/UI/Footer/Footer";
import Profile from "./components/pages/Profile/Profile";
import Favorites from "./components/pages/Favorites/Favorites";
import Lyrics from "./components/pages/Lyrics/Lyrics";
import News from "./components/pages/News/News";
import Information from "./components/pages/Information/Information";
import LoadingModal from "./components/UI/LoadingModal/LoadingModal";

import AuthContext from "./store/authContext";

const App = () => {
	const authCtx = useContext(AuthContext);
	let isLoading = useSelector(selectLoading);

	return (
		<div className="app">
			{isLoading && <LoadingModal />}
			<Header />
			<Sidebar />
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
					path="/favorites"
					element={authCtx.token ? <Favorites /> : <Navigate to="/auth" />}
				/>

				<Route
					path="/lyrics"
					element={authCtx.token ? <Lyrics /> : <Navigate to="/auth" />}
				/>
				<Route
					path="/news"
					element={authCtx.token ? <News /> : <Navigate to="/auth" />}
				/>
					<Route
					path="/information"
					element={authCtx.token ? <Information /> : <Navigate to="/auth" />}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
