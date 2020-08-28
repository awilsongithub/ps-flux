import React, { Component } from "react";

class AboutPage extends Component {
	state = { name: "" };
	updateName = (e) => {
		this.setState({ name: e.target.value });
	};

	render() {
		return (
			<>
				<h2>About Me</h2>
				<p>My Name is {this.state.name} </p>
				<input onChange={this.updateName} />
			</>
		);
	}
}

export default AboutPage;
