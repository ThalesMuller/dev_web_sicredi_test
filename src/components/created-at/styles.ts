import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	text-align: end;
	font-style: italic;
	padding: 5px;
	justify-content: flex-end;
	margin-top: 15px;
	
	div + div {
		margin-left: 5px;
	}
`;
export default Container;
