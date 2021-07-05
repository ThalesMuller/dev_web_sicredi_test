import axios, { AxiosResponse } from 'axios';
import { error_message, success_message } from '../components/toast';
import IDragon from '../interfaces/IDragon';

const Api = axios.create({
	baseURL: 'https://5c4b2a47aa8ee500142b4887.mockapi.io',
	timeout: 5000,
});

export default Api;

/*  */
/* GET .../api/v1/dragon
lista de dragões */
export const getAllDragons = async (): Promise<
	AxiosResponse<IDragon[]> | undefined
> => {
	try {
		const result = await Api.get('/api/v1/dragon/');
		return result;
	} catch (error) {
		error_message('🐉 Erro ao carregar lista de dragões');
	}
};

/* 
GET .../api/v1 / dragon/:id
detalhes de um draão */
export const getDragon = async (
	id: string,
): Promise<AxiosResponse<IDragon> | undefined> => {
	try {
		const result = await Api.get(`/api/v1/dragon/${id}`);
		return result;
	} catch (error) {
		error_message('🐉 Erro ao carregar dragão');
	}
};

/* POST .../api/v1/dragon
criação de um dragão */
export const newDragon = async (
	dragon: IDragon,
): Promise<AxiosResponse<IDragon> | undefined> => {
	const requestDragon: IDragon = {
		...dragon,
		id: null,
		histories: [],
		createdAt: new Date().toISOString(),
	};
	try {
		const result = await Api.post('/api/v1/dragon', requestDragon);
		success_message('🐉 Dragão criado com sucesso');
		return result;
	} catch (error) {
		error_message('🐉 Erro ao criar dragão');
	}
};

/* PUT .../api/v1/ dragon/:id
edição de um dragão */
export const editDragon = async (
	dragon: IDragon,
): Promise<AxiosResponse<IDragon> | undefined> => {
	try {
		const result = await Api.put(`/api/v1/dragon/${dragon.id}`, dragon);
		success_message('🐉 Dragão editado com sucesso');
		return result;
	} catch (error) {
		error_message('🐉 Erro ao editar dragão');
	}
};

/* DELETE .../api/v1/dragon/:id
deleção de um dragão */
export const deleteDragon = async (
	id: string,
): Promise<AxiosResponse<IDragon> | undefined> => {
	try {
		const result = await Api.delete(`/api/v1/dragon/${id}`);
		error_message('🐉 Dragão deletado com sucesso');
		return result;
	} catch (error) {
		error_message('🐉 Erro ao apagar Dragão');
	}
};
