import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TripForm from './components/TripForm/TripForm';
import SummaryCard from './components/SummaryCard/summarycard'; // testing for Dashboard
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
					<Route exact path='/summarycard'>
						<SummaryCard />
					</Route>
				</header>
			</div>
		</Router>
	);
}

export default App;
