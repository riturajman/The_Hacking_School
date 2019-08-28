import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends React.Component {
  state = {
    count: 0
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
      </div>
    )
  }
}

export default App;
