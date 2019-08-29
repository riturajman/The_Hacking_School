import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
// import CC from './CC'
import List from './List';
import User from './CF';
import NameForm from './Uf';
class App extends React.Component {
	state = {
		count: 0,
		contacts: [
			{
				id: '1',
				name: 'afzal',
				handle: '@afzal',
				edit: false,
				avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
			},
			{
				id: '2',
				name: 'tom',
				handle: '@tom',
				edit: false,
				avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
			},
			{
				id: '3',
				name: 'Richard',
				handle: '@richard',
				edit: false,
				avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
			}
		]
	};

	increment = () => {
		console.log('hello', this);
		this.setState({
			count: this.state.count + 1
		});
	};
	decrement = () => {
		this.setState({
			count: this.state.count - 1
		});
	};
	removeContacts = (contact) => {
		console.log('inside app.js', contact);
		const updateState = this.state.contacts.filter((c) => c.id !== contact.id);
		console.log('only updated state', updateState);
		this.setState({
			contacts: updateState
		});
	};

	editContacts = (x) => {
		console.log("from editContacts")
		let editNow = this.state.contacts.map((cont) => {
			if (x.id != cont.id) {
				return {
					...cont
				}
			} else {
				return {
					...cont,
					edit: true
				}
			};
			console.log(editNow)
		})
		this.setState({ contacts: editNow }
		)
	}

	updateContact = (nData) => {
		let newData = this.state.contacts.map((cont) => {
			if (nData.id != cont.id) {
				return cont
			} else {
				return nData
			}
		})
		this.setState({ contacts: newData })
	}
	render() {
		const { count, contacts } = this.state;
		return (
			<div>
				<User />
				<hr />
				<h1>Uncontrolled Form </h1>
				<NameForm />
				<hr />
				<Counter count={count} increment={this.increment} decrement={this.decrement} />
				<hr />
				<List contacts={contacts} removeContacts={this.removeContacts} editContacts={this.editContacts} updateContact={this.updateContact} />
			</div>
		);
	}
}
export default App;
