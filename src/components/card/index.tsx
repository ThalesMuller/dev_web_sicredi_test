import React, { HtmlHTMLAttributes } from 'react';
import CustomCard from './styles';

interface ICardProps{
	loading?: boolean;
	children?: any;
}

const Card: React.FC<ICardProps> = ({ children, loading, ...rest }) => {
	return <CustomCard>{loading ? 'Carregando...' : children}</CustomCard>;
};

export default Card;
