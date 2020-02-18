import React from 'react';
import './App.css';
import LoginPage from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<LoginPage />
				<br />
				<Signup />
			</header>
		</div>
	);
}

export default App;
