import React, { Component } from 'react';
const axios = require('axios');

class gitCall extends Component {
    state = {
        query: '',
        userDetails: ""
    }
    updateQuery =(e) =>{
        this.setState({
            query : e.target.value.trim()
        })
    }

    Submit = () => {
        let userId = 'https://api.github.com/users/' + this.state.query
        axios.get(userId)
        // .then((data)=> console.log(data.data)
        .then((data)=>this.setState({
            userDetails : data.data
        }))
        .catch((err)=>console.log(err))
    }
    render() {

        return (
            <div>
                <h1>Please enter gitHub username</h1>
                <input placeholder = "Search here" value={this.state.query} onChange={this.updateQuery} ></input>
                <button onClick={this.Submit} >Submit</button>
                <br></br> <hr></hr>
                <img src={this.state.userDetails.avatar_url} style={{height:"170px"}}></img>
                <h1>Username : {this.state.userDetails.login}</h1>
                <h2>Bio: {this.state.userDetails.bio}</h2>
                
            </div>
        );
    }
}

export default gitCall;

