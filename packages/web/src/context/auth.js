import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const token = localStorage.getItem('auth-token');
	const [state, setState] = useState({ token });

	useEffect(() => {
		localStorage.setItem('auth-token', state.token);
	}, [state])

	return (
		<AuthContext.Provider value={[state, setState]}>
			{children}
		</AuthContext.Provider>
	);
}
