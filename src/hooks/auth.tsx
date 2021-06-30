import React, {
	createContext,
	useCallback,
	useState,
	useContext,
} from 'react';

import Login from '../services/mocked-login-api';
import IUser from '../interfaces/IUser';


interface AuthState {
	user: IUser;
}

interface SignInCredentials {
	username: string;
	password: string;
}

interface AuthContextData {
	user: IUser;
	signIn(credentials: SignInCredentials): void;
	signOut(): void;
	updateUser(user: IUser): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		const user = localStorage.getItem('@Auth:user');

		if (user) {

			return { user: JSON.parse(user) };
		}

		return {} as AuthState;
	});

	const signIn = useCallback(({ username, password }) => {
		const response = Login(username, password);

		if (response) {
			localStorage.setItem('@Auth:user', JSON.stringify(response));
			setData({ user: response });
		}

	}, []);

	const signOut = useCallback(() => {
		localStorage.removeItem('@Auth:user');
		setData({} as AuthState);
	}, []);

	const updateUser = useCallback(
		(user: IUser) => {
			localStorage.setItem('@Auth:user', JSON.stringify(user));

			setData({
				user
			});
		},
		[setData],
	);

	return (
		<AuthContext.Provider
			value={{ user: data.user, signIn, signOut, updateUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

function useAuth(): AuthContextData {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
