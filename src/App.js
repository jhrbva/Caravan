import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import './BootstrapOverride.scss';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TripForm from './components/TripForm/TripForm';
import SummaryCard from './components/SummaryCard/SummaryCard'; // testing for Dashboard
import Dashboard from './components/Dashboard/Dashboard';
import Map from './components/Map/Map';
import RequestChange from './components/RequestChange/RequestChange';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='app-wrapper'>
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
					<Route exact path='/dashboard'>
						<Dashboard />
					</Route>
					<Route exact path='/map'>
						<Map />
					</Route>
					<Route
						path='/requestchange'
						render={(props) => <RequestChange {...props} />}
					/>
				</header>
			</div>
		</Router>
	);
}

export default App;
