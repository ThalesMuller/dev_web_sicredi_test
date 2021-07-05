import React, { useEffect, useState } from 'react';
import Container, { Buttons, CustomImage } from './styles';
import {
	getDragon,
	editDragon,
	newDragon,
	deleteDragon,
} from '../../services/api';
import IDragon from '../../interfaces/IDragon';
import { Button, Input, DisplayId, CreatedAt } from '../../components';
import { useHistory, useLocation } from 'react-router-dom';
import { FiAlignCenter, FiCloudLightning, FiUser } from 'react-icons/fi';

import dragon1 from '../../assets/dragon1.jpg';
import dragon2 from '../../assets/dragon2.png';
import dragon3 from '../../assets/dragon3.jpg';

enum Origin {
	new,
	edit,
	view,
}

interface IDragonCard {
	image?: string;
}
const defaultDragon: IDragon = {
	id: null,
	createdAt: null,
	histories: '',
	type: '',
	name: '',
};
export default function Details(): JSX.Element {
	const locationParams = useLocation();
	const history = useHistory();
	const [origin, setOrigin] = useState<Origin>(Origin.new);
	const [dragon, setDragon] = useState<IDragon>(defaultDragon);
	const [dragonCard, setDragonCard] = useState<IDragonCard>({});

	useEffect(() => {
		setDragonCard(getRandomDragon());
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
				const id = locationParams.pathname.split('/')[2];
				const data = await getDragon(id);
				setDragon(data?.data ? data.data : defaultDragon);
			})();
		}
	}, [origin]);
	const getRandomDragon = (): IDragonCard => {
		const dragonsImages = [dragon1, dragon2, dragon3];

		const dragon: IDragonCard = {
			image: dragonsImages[
				Math.floor(Math.random() * dragonsImages.length)
			],
		};

		return dragon;
	};

	const handleDeleteDragon = async () => {
		const confirm = true;
		if (confirm && dragon?.id) {
			await deleteDragon(dragon.id);
			history.push('/home');
		}
	};

	const handleEditDragon = () => {
		if (dragon && origin !== Origin.new) {
			setOrigin(Origin.edit);
			history.push(`/edit/${dragon?.id}`);
		}
	};
	const handleCancel = () => {
		if (dragon && origin === Origin.edit) {
			setOrigin(Origin.view);
			history.push(`/details/${dragon?.id}`);
		}
	};

	const submitDragon = async () => {
		if (dragon) {
			//try {
			let data;
			if (origin === Origin.new) {
				data = await newDragon(dragon);
			} else if (origin === Origin.edit && dragon?.id) {
				data = await editDragon(dragon);
			} else {
				throw new Error(`You can't edit or create in ${origin} mode`);
			}
			if (data) {
				setDragon(data?.data);
				setOrigin(Origin.view);
				if (origin === Origin.new) {
					history.push(`/details/${data?.data?.id}`);
				}
			}
		}
	};

	const isPropValid = (prop: string): boolean => {
		if (!prop) {
			return false;
		}

		const dragonProps = ['id', 'name', 'type', 'createdAt', 'histories'];

		const selectedProp = dragonProps.find((p) => p === prop);

		if (selectedProp) {
			return true;
		} else {
			return false;
		}
	};
	const isFormValid = (): boolean => {
		const isTypeEmpty = dragon.type.length < 1;
		const isNameEmpty = dragon.name.length < 1;

		if (isTypeEmpty || isNameEmpty) {
			return false;
		}

		return true;
	};

	const onChange = (value: string, field: string) => {
		if (field && isPropValid(field)) {
			setDragon({
				...dragon,
				[field]: value,
			});
		}
	};

	const renderDragon = () => {
		return (
			dragon && (
				<>
					<CustomImage image={dragonCard?.image} />
					<div className="details-form">
						{dragon.id && <DisplayId>{dragon.id}</DisplayId>}
						<Input
							disabled={origin === Origin.view}
							title="Nome"
							defaultValue={dragon?.name}
							onChange={onChange}
							name="name"
							icon={FiUser}
							error={
								dragon?.name.length > 1 ||
								origin === Origin.view
									? ''
									: 'Digite um nome para o dragão'
							}
							placeholder="Nome do Dragão"
						/>
						<Input
							disabled={origin === Origin.view}
							title="Tipo"
							defaultValue={dragon?.type}
							onChange={onChange}
							name="type"
							icon={FiCloudLightning}
							error={
								dragon?.type.length > 1 ||
								origin === Origin.view
									? ''
									: 'Digite um tipo para o dragão'
							}
							placeholder="Tipo do Dragão"
						/>
						<Input
							disabled={origin === Origin.view}
							title="História"
							defaultValue={dragon?.histories}
							onChange={onChange}
							name="histories"
							icon={FiAlignCenter}
							placeholder="História do Dragão"
						/>
						{dragon.createdAt && (
							<CreatedAt date={dragon.createdAt} />
						)}
						<Buttons>
							{origin === Origin.view && (
								<>
									<Button
										type="button"
										onClick={() => handleDeleteDragon()}
									>
										Deletar
									</Button>
									<Button
										type="button"
										onClick={() => handleEditDragon()}
									>
										Editar
									</Button>
								</>
							)}
							{origin === Origin.edit && (
								<Button
									type="button"
									onClick={() => handleCancel()}
								>
									Cancelar
								</Button>
							)}
							{origin !== Origin.view && (
								<Button
									type="button"
									disabled={!isFormValid()}
									onClick={() => submitDragon()}
								>
									Salvar
								</Button>
							)}
						</Buttons>
					</div>
				</>
			)
		);
	};

	return <Container>{renderDragon()}</Container>;
}
