import styled from 'styled-components';
import { shade } from 'polished';

const bgColor = '#f5f6fa';
const CustomButton = styled.button`
	background: var(--main-color);
	height: 56px;
	border-radius: 10px;
	border: 0;
	padding: 0 16px;
	width: 100%;
	font-weight: 500;
	margin-top: 16px;
	transition: background-color 0.2s;
	cursor: pointer;

	&:hover {
		background: ${shade(0.2, bgColor)};
	}
`;
export default CustomButton;
