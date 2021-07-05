import styled, { css } from 'styled-components';

type DisplayProps = {
	isHome?: boolean;
};
const ContainerId = styled.div<DisplayProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--main-color);
	border-radius: 0.25rem;
	color: black;
	font-size: larger;
	font-weight: 600;
	width: 45px;
	height: 45px;

	${(props) =>
		!props.isHome &&
		css`
			position: absolute;
			top: -41%;
			right: 1%;
			transform: translate(-1%, 0);
		`}
`;

export default ContainerId;

export const Id = styled.div`
	color: black;
	font-style: 30px;
`;
