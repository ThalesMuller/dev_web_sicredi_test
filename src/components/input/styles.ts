import styled, { css } from 'styled-components';
import Tooltip from '../tooltip';

interface ICustomInputProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored?: boolean;
	isDisabled?: boolean;
}

const CustomInput = styled.div<ICustomInputProps>`
	background: #232129;
	border-radius: 10px;
	padding: 16px;
	width: 100%;

	border: 2px solid #232129;

	display: flex;
	align-items: center;

	& + div {
		margin-top: 8px;
	}
	${(props) =>
		props.isDisabled &&
		css`
			cursor: not-allowed;
		`}

	${(props) =>
		props.isErrored &&
		css`
			border-color: #c53030;
		`}

	${(props) => props.isFocused && css``}

  ${(props) => props.isFilled && css``}

	input {
		flex: 1;
		background: transparent;
		border: 0;

		color: var(---white);
		&::placeholder {
			color: var(---white);
		}

		${(props) =>
		props.isDisabled &&
			css`
				cursor: not-allowed;
			`}
	}

	svg {
		margin-right: 16px;
	}
`;

export const Error = styled(Tooltip)`
	height: 20px;
	margin-left: 16px;

	svg {
		margin: 0;
	}

	span {
		background: #c53030;

		&::before {
			border-color: #c53030 transparent;
		}
	}
`;

export default CustomInput;
