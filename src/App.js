import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import '../src/utilities/fonts.scss';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TripForm from './components/TripForm/TripForm';
import InvitationDetails from './components/InvitationDetails/InvitationDetails';
import logo from './assets/caravan-logo.png';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='caravan-logo' alt='Caravan logo' />
					<Route exact path='/'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route exact path='/trip'>
						<TripForm />
					</Route>
					{/* invitation route should later be something like /invistation/$ where $ is the invitation id */}
					<Route exact path='/invitation'>
						<InvitationDetails />
					</Route>
				</header>
			</div>
		</Router>
	);
}

export default App;
