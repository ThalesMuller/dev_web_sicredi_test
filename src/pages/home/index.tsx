import React, { useEffect, useState } from 'react';
import Container, { CardGrid, Buttons, ButtonRound, BasicInfo } from './styles';
import { deleteDragon, getAllDragons } from '../../services/api';
import IDragon from '../../interfaces/IDragon';
import { Button, DisplayId, CreatedAt } from '../../components';
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

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

	const sortById = (a: IDragon, b: IDragon) => {
		if (a.id && b.id) {
			return parseInt(a.id, 10) - parseInt(b.id, 10);
		}

		return 0;
	};

	const loadDragons = async () => {
		const data = await getAllDragons();
		const sortedList = data.data.sort(sortById);

		setDragonList(sortedList);
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

	const renderDragon = (dragon: IDragon, index: number) => {
		return (
			<Container key={`dragon-${index}`}>
				<BasicInfo onClick={() => handleSelectDragon(dragon)}>
					{dragon.createdAt && <CreatedAt date={dragon.createdAt} />}
					{dragon.id && <DisplayId>{dragon.id}</DisplayId>}

					{dragon.name && <div>{dragon.name}</div>}
					{dragon.type && <div>{dragon.type}</div>}
					{dragon.histories && <div>{dragon.histories}</div>}
				</BasicInfo>
				<Buttons>
					<Button onClick={() => handleDeleteDragon(dragon)}>
						Deletar
					</Button>
					<Button onClick={() => handleEditDragon(dragon)}>
						Editar
					</Button>
				</Buttons>
			</Container>
		);
	};

	return (
		<>
			<CardGrid>
				{dragonList.map((dragon, index) => renderDragon(dragon, index))}
			</CardGrid>
			<ButtonRound
				onClick={() => {
					handleNewDragon();
				}}
			>
				<FiPlus size={1472}/>
			</ButtonRound>
		</>
	);
}
