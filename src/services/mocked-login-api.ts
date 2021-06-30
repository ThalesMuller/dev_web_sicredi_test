import IUser from '../interfaces/IUser';

const users: IUser[] = [
	{ id: '0', name: 'admin', username: 'admin', password: 'admin' },
	{ id: '1', name: 'thales muller', username: 'tmuller', password: 'th4l3sMu113r!' }
];

export default function Login(username: string, password: string): IUser | undefined {
	const user: IUser | undefined = users.find(u => u.username === username);

	if (user && user.password === password) {
		return user;
	}
	else {
		console.error('username or password incorrect');
		return undefined;
	}
}