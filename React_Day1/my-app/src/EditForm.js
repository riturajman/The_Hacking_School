import React from 'react';
class EDITFORM extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.contact.id,
			name: this.props.contact.name,
			handle: this.props.contact.handle,
			avatarURL: this.props.contact.avatarURL
		};
	}
	handleSubmit = (e) => {
        e.preventDefault();
        console.log("what is e", this.state)
		this.props.updateContact(this.state);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
        console.log('edit form',this.props)
		return (
			<div style={{ border: '2px solid blue' }}>
				<h1>User Form </h1>
				<form onSubmit={this.handleSubmit}>
					<input name="id" value={this.state.id} onChange={this.handleChange} />
					<input name="name" value={this.state.name} onChange={this.handleChange} />
					<input name="handle" value={this.state.handle} onChange={this.handleChange} />
					<input name="avatarURL" value={this.state.avatarURL} onChange={this.handleChange} />

						<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default EDITFORM;