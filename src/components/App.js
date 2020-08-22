import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";

import Header from "./common/Header";

class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className='container-fluid mt-3'>
				<BrowserRouter>
					<Route>
						<Header />
					</Route>
					<Switch>
						<Route
							exact
							path='/'
							render={() => <HomePage />}
						></Route>
						<Route
							exact
							path='/about'
							render={() => <AboutPage />}
						></Route>
						<Route
							exact
							path='/courses'
							render={() => <CoursesPage />}
						></Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
