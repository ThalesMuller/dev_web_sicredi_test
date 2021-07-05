import { shade } from 'polished';
import styled from 'styled-components';
import { Button, CreatedAt, DisplayId } from '../../components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 250px;
	max-height: 250px;
	padding: 15px;
	background-color: var(--background-highlighted-transparent);
	border-radius: 0.25rem;

	max-width: 360px;

	-webkit-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
	box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);

	&:hover {
		-webkit-box-shadow: 8px 8px 13px -2px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 8px 8px 13px -2px rgba(0, 0, 0, 0.75);
		box-shadow: 8px 8px 13px -2px rgba(0, 0, 0, 0.75);
	}
`;
export default Container;

export const CardGrid = styled.div`
	display: grid;
	overflow-y: auto;
	overflow-x: hidden;
	max-height: 100%;
	max-width: 100%;

	grid-gap: 15px;

	@media only screen and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media only screen and (min-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media only screen and (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media only screen and (min-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const Buttons = styled.div`
	display: flex;
	width: 100%;
	max-height: 30%;

	button + button {
		margin-left: 1rem;
	}
`;

export const BasicInfo = styled.div`
	position: relative;
	cursor: pointer;
	max-width: 100%;
	max-height: 70%;
	display: flex;
	flex-direction: column;
`;

const bgColor = '#e1b12c';
export const ButtonRound = styled(Button)`
	--button-size: 60px;
	border-radius: 50%;
	width: 100%;
	height: var(--button-size);
	max-width: var(--button-size);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 1.5rem;
	right: 2rem;

	&:hover {
		background: ${shade(0.2, bgColor)};
	}

	color: var(--main-color);
	background-color: var(--highlighted-content);
`;
export const Info = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: flex-start;
	align-items: baseline;
	max-width: 100%;
	overflow: hidden;
	max-height: 20px;

	div {
		max-width: 85%;
		margin-left: 0.25rem;
	}
`;

export const IdContainer = styled.div`
	display: flex;
	justify-content: flex-end; ;
`;
