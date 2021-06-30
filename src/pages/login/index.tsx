import React, { useState } from 'react';
import Container from './styles';
import { Input, Button } from '../../components';
import { useAuth } from '../../hooks/auth';

interface IState {
	username: string | undefined;
	password: string | undefined;
}

export default function Login(): JSX.Element {
	const [data, setData] = useState<IState>(() => {
		const username = 'admin';
		const password = 'admin';
		return { username, password };
	});

	const { signIn } = useAuth();

	const handleLogin = () => {
		const { username, password } = data;
		if (username && password) {
			try {
				signIn({ username, password });
			} catch (err) {
				console.error(err);
			}
		}
	};

	return (
		<Container>
			{/* <Input value={ } label={ } />
			<Input value={ } label={ } /> */}
			<Button onClick={handleLogin}>Login</Button>
		</Container>
	);
}
