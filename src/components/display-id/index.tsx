import React from 'react';
import ContainerId, { Id } from './styles';

const DisplayId: React.FC = ({ children }) => {
	return (
		<ContainerId>
			<Id>{children}</Id>
		</ContainerId>
	);
};

export default DisplayId;
