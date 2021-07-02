import { shade } from 'polished';
import styled from 'styled-components';
import { Button } from '../../components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 250px;
	max-height: 250px;
	padding: 15px;
	background-color: var(--background-highlighted);
	border-radius: 0.25rem;

	-webkit-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
	box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
`;
export default Container;

export const CardGrid = styled.div`
	padding: 15px;
	display: grid;

	grid-gap: 30px;

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

	button + button {
		margin-left: 1rem;
	}
`;

export const BasicInfo = styled.div`
	position: relative;
	cursor: pointer;
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
	bottom: 1rem;
	right: 1rem;

	&:hover {
		background: ${shade(0.2, bgColor)};
	}

	color: var(--main-color);
	background-color: var(--highlighted-content);
`;
