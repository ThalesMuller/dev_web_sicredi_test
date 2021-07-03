import { shade } from 'polished';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 47.61px);
	width: 100%;
	flex-direction: column;
	max-width: 500px;
	margin: 0 auto;
	padding: 1px 15px 1px 15px;

	.form-login {
		-webkit-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
		box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);

		padding: 2rem;
		border-radius: 0.25rem;

		background-color: var(--background-highlighted);
		width: 100%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
`;

const bgColor = '#2f3640';
export const Circle = styled.div`
	--circle-size: 100px;
	border-radius: 50%;
	background-color: ${shade(-0.5, bgColor)};
	width: var(--circle-size);
	height: var(--circle-size);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Fields = styled.div`
	width: 100%;
`;

export default Container;
