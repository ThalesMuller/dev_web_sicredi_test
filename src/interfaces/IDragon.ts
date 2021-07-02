export default interface IDragon {
	id: string | null;
	createdAt: string | null | Date;
	name: string;
	histories: string | string[];
	type: string;
}
