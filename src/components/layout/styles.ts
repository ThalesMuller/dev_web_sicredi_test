import { shade } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
	padding: 12px 0;
	background: var(--background-highlighted);
	z-index: 10;
	position: relative;
	height: 45px;
`;

const btnColor = '#f5f6fa';
export const HeaderContent = styled.div`
	padding: 0 1rem;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> img {
		height: 80px;
	}

	button {
		align-content: center;
		display: flex;
		margin-left: 10px;
		background: transparent;
		border: 0;
		cursor: pointer;

		svg {
			color: var(--main-color);
			width: 20px;
			height: 20px;
			&:hover {
				color: ${shade(0.2, btnColor)};
			}
		}
	}
`;
export const Content = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	padding: 15px;

	height: calc(100vh - 45px);
`;
