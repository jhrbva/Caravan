import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import './BootstrapOverride.scss';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TripForm from './components/TripForm/TripForm';
import SummaryCard from './components/SummaryCard/SummaryCard'; // testing for Dashboard
import TripDetails from './components/TripDetails/TripDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import RequestChange from './components/RequestChange/RequestChange';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userid: 1, name: '' };
	}

	getUser = (userid, name) => {
		this.setState({ userid, name });
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<header className='app-wrapper'>
						<Route exact path='/'>
							<Login getUser={this.getUser} />
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
						{/* this route will change once we have the dashboard component and start getting trip and user ids dynamically */}
						<Route exact path='/invitation'>
							<TripDetails />
						</Route>
						<Route exact path='/dashboard'>
							<Navbar name={this.state.name} />
							<Dashboard userid={this.state.userid} />
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
}

export default App;
