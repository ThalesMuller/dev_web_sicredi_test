import React from 'react';
import {
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
	isPrivate?: boolean;
	component: React.ComponentType;
}

function Route({ isPrivate = false, component: Component, ...rest }: RouteProps): JSX.Element {
	const { user } = useAuth();

	return (
		<ReactDOMRoute
			{...rest}
			render={({ location }) => {
				return isPrivate === !!user ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: isPrivate ? '/' : '/home',
							state: { from: location },
						}}
					/>
				);
			}}
		/>
	);
}

export default Route;
