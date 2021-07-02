import styled from 'styled-components';

export const Header = styled.header`
	padding: 12px 0;
	background: var(--background-highlighted);
	z-index: 10;
	position: relative;
`;

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
		margin-left: auto;
		background: transparent;
		border: 0;

		svg {
			color: var(--main-color);
			width: 20px;
			height: 20px;
		}
	}
`;
