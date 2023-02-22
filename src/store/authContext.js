import { createContext, useCallback, useEffect, useState } from 'react';

let logoutTimer;

const AuthContext = createContext({
	token: "",
	login: () => {},
	logout: () => {},
	userId: null,
	username: ""
});

const calculateRemainingTime = (exp) => {
	const currentTime = new Date().getTime();
	const expTime = exp;
	const remainingTime = expTime - currentTime;
	return remainingTime;
};

const getLocalData = () => {
	const storedToken = localStorage.getItem("token");
	const storedExp = localStorage.getItem("exp");
	const storedId = localStorage.getItem('userId');
	const storedUsername = localStorage.getItem('username')

	const remainingTime = calculateRemainingTime(storedExp);

	if (remainingTime <= 1000 * 60 * 30) {
		localStorage.removeItem("token");
		localStorage.removeItem("exp");
		localStorage.removeItem('userId')
		localStorage.removeItem('username')
		return null;
	}

	return {
		token: storedToken,
		duration: remainingTime,
		userId: storedId,
		username: storedUsername
	};
};

export const AuthContextProvider = (props) => {
	const localData = getLocalData();

	let initialToken;
	let initialId;
	let initialUsername;

	if (localData) {
		initialToken = localData.token;
		initialId = localData.userId
	}

	const [token, setToken] = useState(initialToken);
	const [userId, setUserId] = useState(initialId);
	const [username, setUsername] = useState(initialUsername);

	const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
		setUsername(null)
    localStorage.removeItem('token')
    localStorage.removeItem('exp')
    localStorage.removeItem('userId')
		localStorage.removeItem('username')

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

	const login = (token, exp, userId, username) => {
		setToken(token);
		setUserId(userId);
		setUsername(username);
		localStorage.setItem("token", token);
		localStorage.setItem("exp", exp);
		localStorage.setItem('userId', userId);
		localStorage.setItem('username', username);

		const remainingTime = calculateRemainingTime(exp);

		logoutTimer = setTimeout(logout, remainingTime);
	};

	useEffect(() => {
    if (localData) {
      logoutTimer = setTimeout(logout, localData.duration)
    }
  }, [localData, logout]);

	const contextValue = {
		token,
		login,
		logout,
		userId,
		username
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;