import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Map_AM from './components/Maps-amchats';
import Login from './components/Login';
import Register from './components/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Main>
					<Route exact strict path='/' component={Map_AM} />
					<Route exact strict path='/login' component={Login} />
					<Route exact strict path='/register' component={Register} />
				</Main>
			</Router>
		</div>
	);
};

export default App;
