import React from 'react';
import ContainerId, { Id } from './styles';

type DisplayProps = {
	isHome?: boolean;
};
const DisplayId: React.FC<DisplayProps> = ({ isHome, children }) => {
	return (
		<ContainerId isHome={isHome}>
			<Id>{children}</Id>
		</ContainerId>
	);
};

export default DisplayId;
