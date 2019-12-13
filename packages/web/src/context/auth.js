import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('auth-token'));

	return (
		<AuthContext.Provider value={[token, setToken]}>
			{children}
		</AuthContext.Provider>
	);
}
