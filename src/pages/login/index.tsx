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

	const isFormValid = () => {
		const isUserEmpty = !data.username || data.username?.length < 1;
		const isPassEmpty = !data.password || data.password?.length < 1;
		if (isUserEmpty || isPassEmpty) {
			return false;
		}
		return true;
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
						error={
							!data.username || data.username?.length < 1
								? 'Insira um usuário válido'
								: ''
						}
					/>
					<Input
						name="password"
						type="password"
						defaultValue={data.password}
						onChange={onChange}
						icon={FiKey}
						error={
							!data.password || data.password?.length < 1
								? 'Insira sua senha'
								: ''
						}
					/>
					<Button
						disabled={!isFormValid()}
						onClick={() => handleLogin()}
					>
						Login
					</Button>
				</Fields>
			</div>
		</Container>
	);
}
