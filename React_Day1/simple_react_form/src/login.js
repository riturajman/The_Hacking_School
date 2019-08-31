import React, { Component } from 'react';

class Login extends Component {

    render() { 
        return ( 
            <div>
                <h1>Please enter your name</h1>
                <input name="name" value={this.props.state.name} onChange={this.props.changeState} />
                <br></br>
                <h1>Please enter your password</h1>
                <input name="password" value={this.props.state.password} type="password" onChange={this.props.}
            </div>
         );
    }
}
 
export default Login;