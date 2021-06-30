import React, { ButtonHTMLAttributes } from 'react';
import CustomButton from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
	return (
		<CustomButton type="button" {...rest}>
			{loading ? 'Carregando...' : children}
		</CustomButton>
	);
}

export default Button;