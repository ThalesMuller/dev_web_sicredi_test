import React from 'react';
import Container from './styles';
import { FiCalendar } from 'react-icons/fi';

type Props = {
	date: string | Date;
};

const CreatedAt = (props: Props): JSX.Element => {
	const { date } = { ...props };
	const dateTime = new Date(date);

	const dateObject = {
		day: dateTime.getDay(),
		month: dateTime.getMonth(),
		year: dateTime.getFullYear(),
		hour: dateTime.getHours(),
		minute: dateTime.getMinutes(),
	};

	const dateStr = `${fillZeros(dateObject.hour.toString())}:${fillZeros(
		dateObject.minute.toString(),
	)} - ${fillZeros(dateObject.day.toString())}/${fillZeros(
		dateObject.month.toString(),
	)}/${dateObject.year.toString()}`;

	return (
		<Container title='Criado em'>
			<div>
				<FiCalendar />
			</div>
			<div>{dateStr}</div>
		</Container>
	);
};

const fillZeros = (data: string, maxZeros = 2) => {
	return `${'0'.repeat(maxZeros - data.length)}${data}`;
};

export default CreatedAt;
