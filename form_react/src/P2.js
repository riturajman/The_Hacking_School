import React, { PureComponent } from 'react';

class PO extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>First Name</h1>
                <input name="fname" value={this.props.state.fname}/>
                <h1>Last Name</h1>
                <input name="lname" value={this.props.state.lname}/>
                <h1>Email</h1>
                <input name="email" value={this.props.state.email}/>
                <h1>Occupation</h1>
                <input name="occupation" value={this.props.state.occupation}/>
                <h1>City</h1>
                <input name="email" value={this.props.state.email}/>
                <h1>Bio</h1>
                <input name="bio" value={this.props.state.bio}/>

                <br></br>
                <br></br>
                <button onClick={this.props.lastStep}>Go Back</button>
                <button onClick={this.props.nextStep}>Continue</button>
            </div>
         );
    }
}
 
export default PO;