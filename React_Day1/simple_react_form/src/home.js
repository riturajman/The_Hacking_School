import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
    state = {
        isLogged : 'false',
        name : '',
        password: '',
     }
    changeState = (e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 
    render() { 
        return ( 
            <div>
                <h1>This is Home</h1>
            </div>
         );
    }
}



export default Home;