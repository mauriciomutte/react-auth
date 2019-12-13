import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('auth-token'));

	useEffect(() => {
		if(token)	{
			Axios.get('http://localhost:3030/auth', {
				headers: {
					'auth-token': token,
				}
			}).then(() => {
				localStorage.setItem('auth-token', token);
			}).catch(e => setToken(null));
		}
 	}, [token]);

	return (
		<AuthContext.Provider value={[token, setToken]}>
			{children}
		</AuthContext.Provider>
	);
}
