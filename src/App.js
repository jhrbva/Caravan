import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TripForm from './components/TripForm/TripForm';
import caravan from './caravan.png';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<h2>Welcome to the Caravan App</h2>
					<img src={caravan} className="App-logo" alt="Caravan" />
					{/*<h1 className='temp-logo'>Caravan</h1>*}
					{/* TODO: CA-30 create logo */}

					<Route exact path='/'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route exact path='/trip'>
						<TripForm />
					</Route>
					</header>
			</div>
		</Router>
	);
}

export default App;
