import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';
import Home from '../pages/home';
import Details from '../pages/details';
import Login from '../pages/login';


const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/' exact component={Login} />
			<Route path='/home' exact component={Home} isPrivate />
			<Route path='/new' component={Details} isPrivate />
			<Route path='/details/:id' component={Details} isPrivate />
			<Route path='/edit/:id' component={Details} isPrivate />
			
			<Route path='*' component={Login}  />
		</Switch>
	);
};

export default Routes;
