import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import List from './List';

class App extends React.Component {
  state = {
    count: 0,
    contact: [
      {
        id: '1',
        name: 'afzal',
        handle: '@afzal&#39;',
        avatarURL:
          'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '2',
        name: 'tom',
        handle: '@tom',
        avatarURL:
          'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '3',
        name: 'Richard',
        handle: '@richard',
        avatarURL:
          'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      }
    ]
  }
  

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
    else{
      this.setState({
        count : 0
      })
    }
  }
  
  render() {
    const { count } = this.state
    return (
      <div>
        <Counter count={count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <List
        contact={this.state.contact}
        />
      </div>

    )
  }
}

export default App;
