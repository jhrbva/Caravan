import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<h1 className='temp-logo'>Caravan</h1>
					{/* TODO: CA-30 create logo */}
					<Switch>
						<Route exact path='/'>
							<Link to='/signup'>Signup</Link>
							<Login />
						</Route>
						<Route exact path='/signup'>
							<Link to='/'>Sign In</Link>
							<Signup />
						</Route>
					</Switch>
				</header>
			</div>
		</Router>
	);
}

export default App;
