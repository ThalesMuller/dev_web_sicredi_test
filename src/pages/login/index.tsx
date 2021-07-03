import React, { useState } from 'react';
import Container, { Circle, Fields } from './styles';
import { Input, Button } from '../../components';
import { useAuth } from '../../hooks/auth';
import { FiKey, FiUser } from 'react-icons/fi';

interface IState {
	username: string | undefined;
	password: string | undefined;
}

export default function Login(): JSX.Element {
	const [data, setData] = useState<IState>(() => {
		const username = '';
		const password = '';
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
			<div className="form-login">
				<Circle>
					<FiUser size={40} />
				</Circle>
				<Fields>
					<Input
						name="username"
						defaultValue={data.username}
						onChange={onChange}
						icon={FiUser}
					/>
					<Input
						name="password"
						type="password"
						defaultValue={data.password}
						onChange={onChange}
						icon={FiKey}
					/>
					<Button onClick={() => handleLogin()}>Login</Button>
				</Fields>
			</div>
		</Container>
	);
}
