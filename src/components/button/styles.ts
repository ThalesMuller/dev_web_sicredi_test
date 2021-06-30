import styled from 'styled-components';
import { shade } from 'polished';


const CustomButton = styled.button`
	background: var(--sicredi-main-green);
  	height: 56px;
  	border-radius: 10px;
	border: 0;
	padding: 0 16px;
	color: var(--sicredi-text-gray);
	width: 100%;
	font-weight: 500;
	margin-top: 16px;
	transition: background-color 0.2s;

	&:hover {
		background: ${shade(0.2, '#3fa110')};
	}
`;
export default CustomButton;