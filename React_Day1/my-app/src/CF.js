import React from 'react';
class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			handle: '',
			avatarURL: ''
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div style={{ border: '2px solid blue' }}>
				<h1>User Form </h1>
				<form onSubmit={this.handleSubmit}>
					<input name="id" value={this.state.name} onChange={this.handleChange} />
					<input name="name" value={this.state.password} onChange={this.handleChange} />
					<input name="handle" value={this.state.password} onChange={this.handleChange} />
					<input name="avatarURL" value={this.state.password} onChange={this.handleChange} />

						<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default User;