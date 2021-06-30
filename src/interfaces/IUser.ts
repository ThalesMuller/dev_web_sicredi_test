export default interface IUser {
	id: string;
	name: string;
	username: string;
	password: string;
}

export interface ISignInCredentials {
	username: string;
	password: string;
}