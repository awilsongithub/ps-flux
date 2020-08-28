import React, { Component } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

class App extends Component {
	constructor() {
		super();
	}

	/**
	 * TODO: INITIALIZE THE STORE HERE?
	 */

	render() {
		return (
			<div className='container-fluid mt-3'>
				<ToastContainer autoClose={3000} hideProgressBar />
				<Header />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/about' component={AboutPage} />
					<Route path='/courses' component={CoursesPage} />
					<Route path='/course/:slug' component={ManageCoursePage} />
					<Route path='/course' component={ManageCoursePage} />
					<Redirect from='/about/page' to='/about' />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
