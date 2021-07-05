import React, { useEffect, useState } from 'react';
import Container, {
	CardGrid,
	Buttons,
	ButtonRound,
	BasicInfo,
	Info,
	IdContainer,
} from './styles';
import { deleteDragon, getAllDragons } from '../../services/api';
import IDragon from '../../interfaces/IDragon';
import { Button, CreatedAt, DisplayId } from '../../components';
import { useHistory } from 'react-router-dom';
import {
	FiAlignCenter,
	FiCloudLightning,
	FiPlus,
	FiUser,
} from 'react-icons/fi';

const initialDragonLIst: IDragon[] = [
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
	{
		createdAt: '2021-06-25T21:07:29.475Z',
		name: '.....',
		type: '.....',
		histories: '...................................',
		id: '-',
	},
];

export default function Details(): JSX.Element {
	const history = useHistory();
	const [dragonList, setDragonList] = useState<IDragon[]>(initialDragonLIst);
	const [loading, setLoading] = useState(true);

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
		setLoading(true);
		const data = await getAllDragons();
		const sortedList = data?.data.sort(sortById);

		setDragonList(sortedList ? sortedList : []);
		setLoading(false);
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

	const listToString = (arr: string | string[]): string => {
		if (Array.isArray(arr)) {
			return arr.join('\n');
		}
		return arr;
	};

	const renderDragon = (dragon: IDragon, index: number) => {
		return (
			<Container key={`dragon-${index}`}>
				<BasicInfo onClick={() => handleSelectDragon(dragon)}>
					{dragon.id && (
						<IdContainer>
							<DisplayId isHome>{dragon.id}</DisplayId>
						</IdContainer>
					)}

					{dragon.name && (
						<Info>
							<FiUser />
							<div title={dragon.name}>{dragon.name}</div>
						</Info>
					)}
					{dragon.type && (
						<Info>
							<FiCloudLightning />
							<div title={dragon.type}>{dragon.type}</div>
						</Info>
					)}
					{dragon.histories.length > 0 && (
						<Info>
							<FiAlignCenter />
							<div title={listToString(dragon.histories)}>
								{listToString(dragon.histories)}
							</div>
						</Info>
					)}
					{dragon.createdAt && <CreatedAt date={dragon.createdAt} />}
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
				<FiPlus size={1472} />
			</ButtonRound>
		</>
	);
}
