import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Header, HeaderContent } from './styles';
import { useAuth } from './hooks/auth';
import { FiLogOut } from 'react-icons/fi';

function App(): JSX.Element {
	const { signOut } = useAuth();

	return (
		<Router>
			<AppProvider>
				<Header>
					<HeaderContent>
						<button type="button" onClick={() => signOut}>
							{<FiLogOut />}
						</button>
					</HeaderContent>
				</Header>

				<Routes />
			</AppProvider>

			<GlobalStyle />
		</Router>
	);
}

export default App;
