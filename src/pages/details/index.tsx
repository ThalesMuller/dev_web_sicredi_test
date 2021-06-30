import React, { useEffect, useState } from 'react';
import Container from './styles';
import {
	getDragon,
	editDragon,
	newDragon,
	deleteDragon,
} from '../../services/api';
import IDragon from '../../interfaces/IDragon';
import { Button } from '../../components';
import { useHistory, useLocation } from 'react-router-dom';

enum Origin {
	new,
	edit,
	view,
}

export default function Details(): JSX.Element {
	const locationParams = useLocation();
	const history = useHistory();
	const [origin, setOrigin] = useState<Origin>(Origin.new);
	const [dragon, setDragon] = useState<IDragon>({
		id: null,
		createdAt: null,
		histories: '',
		type: '',
		name: '',
	});

	useEffect(() => {
		const path = locationParams.pathname.split('/')[1];
		switch (path) {
			case 'new':
				setOrigin(Origin.new);
				break;
			case 'edit':
				setOrigin(Origin.edit);
				break;
			case 'details':
				setOrigin(Origin.view);
				break;

			default:
				throw new Error('Action not found');
		}
	}, []);

	useEffect(() => {
		if (origin !== Origin.new && !dragon?.id) {
			(async () => {
				try {
					const id = locationParams.pathname.split('/')[2];
					const data = await getDragon(id);
					setDragon(data.data);
				} catch (err) {
					console.error(err);
				}
			})();
		}
	}, [origin]);

	const handleDeleteDragon = async () => {
		try {
			const confirm = true;
			if (confirm && dragon?.id) {
				await deleteDragon(dragon.id);
				history.push('/home');
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleEditDragon = () => {
		if (dragon && origin !== Origin.new) {
			setOrigin(Origin.edit);
		}
	};

	const submitDragon = async () => {
		if (dragon) {
			try {
				let data;
				if (origin === Origin.new) {
					data = await newDragon(dragon);
				} else if (origin === Origin.edit && dragon?.id) {
					data = await editDragon(dragon);
				} else {
					throw new Error(
						`You can't edit or create in ${origin} mode`,
					);
				}
				if (data) {
					setDragon(data?.data);
					setOrigin(Origin.view);
					if (origin === Origin.new) {
						history.push(`/details/${data?.data?.id}`);
					}
				}
			} catch (err) {
				console.error(err);
			}
		}
	};

	const renderDragon = () => {
		return (
			dragon && (
				<div>
					<div>
						{dragon.id && <div>{dragon.id}</div>}
						{dragon.name && <div>{dragon.name}</div>}
						{dragon.type && <div>{dragon.type}</div>}
						{dragon.createdAt && <div>{dragon.createdAt}</div>}
						{dragon.histories && <div>{dragon.histories}</div>}
					</div>

					{origin === Origin.view && (
						<Button onClick={() => handleEditDragon()}>
							Editar Dragão
						</Button>
					)}
					{origin !== Origin.new && (
						<Button onClick={() => handleDeleteDragon()}>
							Deletar Dragão
						</Button>
					)}
					{origin !== Origin.view && (
						<Button onClick={() => submitDragon()}>
							Salvar Dragão
						</Button>
					)}
					<br />
				</div>
			)
		);
	};

	return <Container>{renderDragon()}</Container>;
}
