import React, { PureComponent } from 'react';

class P1 extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Occupation</h1>
                <input name="occupation" value={this.props.state.occupation} onChange={this.props.onChange}/>
                <h1>City</h1>
                <input name="city" value={this.props.state.city} onChange={this.props.onChange}/>
                <h1>Bio</h1>
                <input name="bio" value={this.props.state.bio} onChange={this.props.onChange}/>
                <br></br>
                <br></br>
                <button onClick={this.props.lastStep}>Go Back</button>
                <button onClick={this.props.nextStep}>Continue</button>

            </div>
         );
    }
}
 
export default P1;