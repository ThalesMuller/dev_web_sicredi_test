import axios, { AxiosResponse } from 'axios';
import IDragon from '../interfaces/IDragon';

const Api = axios.create({
	baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io'
});

export default Api;

/*  */
/* GET .../api/v1 / dragon
lista de dragões */
export const getAllDragons = async (): Promise<AxiosResponse<IDragon[]>> => {
	const result = await Api.get('/api/v1/dragon/');
	return result;
};

/* 
GET .../api/v1 / dragon /: id
detalhes de um draão */
export const getDragon = async (id: string): Promise<AxiosResponse<IDragon>> => {
	const result = await Api.get(`/api/v1/dragon/:${id}`);
	return result;
};

/* POST .../api/v1 / dragon
criação de um dragão */
export const newDragon = async (dragon: IDragon): Promise<AxiosResponse<void>> => {
	const result = await Api.post('/api/v1/dragon/', dragon);
	return result;
};

/* PUT .../api/v1 / dragon /: id
edição de um dragão */
export const editDragon = async (dragon: IDragon): Promise<AxiosResponse<void>> => {
	const result = await Api.put(`/api/v1/dragon/:${dragon.id}`, dragon);
	return result;
};

/* DELETE .../api/v1 / dragon /: id
deleção de um dragão */
export const deleteDragon = async (id: string): Promise<AxiosResponse<void>> => {
	const result = await Api.delete(`/api/v1/dragon/:${id}`);
	return result;
};