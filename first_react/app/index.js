//react component

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>This is H1</h1>
                <h2>This is H2</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)