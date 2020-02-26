import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>Welcome to React</h2>
				<h1 className='temp-logo'>Caravan</h1>
				{/* TODO: CA-30 create logo */}
				<Login />
				<Signup />
			</header>
		</div>
	);
}

export default App;
