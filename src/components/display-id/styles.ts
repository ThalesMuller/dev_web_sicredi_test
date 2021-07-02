import styled from 'styled-components';

const ContainerId = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	background-color: var(--main-color);
	border-radius: 0.25rem;
	color: black;
	top: -56%;
	right: 1%;
	width: 45px;
	height: 45px;
	font-size: larger;
	font-weight: 600;
	transform: translate(-1%, 0);
`;

export default ContainerId;

export const Id = styled.div`
	color: black;
	font-style: 30px;
`;
