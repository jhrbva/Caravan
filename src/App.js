import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<h2>Welcome to React</h2>
					<h1 className='temp-logo'>Caravan</h1>
					{/* TODO: CA-30 create logo */}

					<Route exact path='/'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
				</header>
			</div>
		</Router>
	);
}

export default App;
