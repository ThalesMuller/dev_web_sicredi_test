import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Content, Header, HeaderContent } from './styles';
import { useAuth } from '../../hooks/auth';

type LayoutProps = {
	isPrivate: boolean;
};
const Layout: React.FC<LayoutProps> = ({ isPrivate, children }) => {
	const { signOut, user } = useAuth();

	return (
		<div>
			{isPrivate && (
				<Header>
					<HeaderContent>
						<div>{user.name}</div>
						<button type="button" onClick={() => signOut()}>
							{<FiLogOut />}
						</button>
					</HeaderContent>
				</Header>
			)}
			<Content>{children}</Content>
		</div>
	);
};

export default Layout;
