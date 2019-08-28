//react component

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state = {
        count : 0
    }

    increment = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = ()=>{
        this.setState({
            count : this.state.count - 1
        })
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <Counter count={count}
                increment = {this.increment}
                d
                />

                
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)