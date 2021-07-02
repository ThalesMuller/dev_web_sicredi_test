import React, { useState } from 'react';
import Container from './styles';
import { Input, Button, Card } from '../../components';
import { useAuth } from '../../hooks/auth';
import { FiKey, FiUser } from 'react-icons/fi';

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

	const onChange = (value: string, field: string) => {
		if (field && value) {
			setData({
				...data,
				[field]: value,
			});
		}
	};

	return (
		<Container>
			<Card>
				<form onSubmit={handleLogin} action="">
					<Input
						name="username"
						defaultValue={data.username}
						onChange={onChange}
						icon={FiUser}
					/>
					<Input
						name="password"
						defaultValue={data.password}
						onChange={onChange}
						icon={FiKey}
					/>
					<Button type="submit">Login</Button>
				</form>
			</Card>
		</Container>
	);
}
