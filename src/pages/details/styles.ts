import styled, { css } from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	flex-direction: column;
	max-width: 800px;
	margin: 5px auto;

	.details-form {
		-webkit-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
		box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);

		padding: 1rem;
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
		background-color: var(--background-highlighted);
		width: 100%;
		position: relative;
		height: 70%;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

interface IImageProps {
	image?: string;
}
export const CustomImage = styled.div<IImageProps>`
	height:30%;
	width: 100%;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
	background-size: cover;
	background-repeat: no-repeat;

	-webkit-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 8px 8px 11px -4px rgba(0, 0, 0, 0.75);
	box-shadow: 8px 18px 11px -4px rgba(0, 0, 0, 0.75);

	${(props) =>
		props.image &&
		css`
			background-position: ${props.image ===
			'/static/media/dragon1.38277ad6.jpg' ? 'bottom' : 'inherit'};
			background-image: url(${props.image});
		`}
`;

export const Buttons = styled.div`
	display: flex;
	width: 100%;
	margin-top: 30px !important;

	button + button {
		margin-left: 1rem;
	}
`;

export default Container;
