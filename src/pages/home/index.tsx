import React, { useEffect, useState } from 'react';
import Container from './styles';
import { deleteDragon, getAllDragons } from '../../services/api';
import IDragon from '../../interfaces/IDragon';
import { Button } from '../../components';
import { useHistory } from 'react-router-dom';

export default function Details(): JSX.Element {
	const history = useHistory();
	const [dragonList, setDragonList] = useState<IDragon[]>([]);

	useEffect(() => {
		try {
			(async () => {
				await loadDragons();
			})();
		} catch (err) {
			console.error(err);
		}
	}, []);

	const loadDragons = async () => {
		const data = await getAllDragons();
		setDragonList(data.data);
	};

	const handleSelectDragon = (dragon: IDragon) => {
		history.push(`/details/${dragon.id}`);
	};
	const handleDeleteDragon = async (dragon: IDragon) => {
		try {
			const confirm = true;
			if (confirm && dragon?.id) {
				await deleteDragon(dragon.id);
				await loadDragons();
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleNewDragon = () => {
		history.push('/new');
	};

	const handleEditDragon = (dragon: IDragon) => {
		history.push(`/edit/${dragon.id}`);
	};

	const renderDragon = (dragon: IDragon, index:number) => {
		return (
			<div key={`dragon-${index}`}>
				<div onClick={() => handleSelectDragon(dragon)}>
					{dragon.id && <div>{dragon.id}</div>}
					{dragon.name && <div>{dragon.name}</div>}
					{dragon.type && <div>{dragon.type}</div>}
					{dragon.createdAt && <div>{dragon.createdAt}</div>}
					{dragon.histories && <div>{dragon.histories}</div>}
				</div>
				<Button onClick={() => handleEditDragon(dragon)}>
					Editar Dragão
				</Button>
				<Button onClick={() => handleDeleteDragon(dragon)}>
					Deletar Dragão
				</Button>
				<br />
			</div>
		);
	};

	return (
		<Container>
			<Button
				onClick={() => {
					handleNewDragon();
				}}
			>
				Novo Dragão
			</Button>
			{dragonList.map((dragon, index) => renderDragon(dragon, index))}
		</Container>
	);
}
