import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/AllRoutes';
import NavBar from './components/NavBar';


class App extends Component {
	render() {
		return (
			<div>
			<NavBar />
			<AllRoutes />
			</div>
		);
	}
}

export default App;
