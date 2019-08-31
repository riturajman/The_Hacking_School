import React, { Component } from 'react';
import P0 from './P0';
import P1 from './P1';
import P2 from './P2';
import P3 from './P3';

class Form extends Component {
    state = { 
        step : 0,
        fname : '',
        lname : '',
        email : '',
        occupation : '',
        city : '',
        bio : ''

        
     }
     onChange = (e) =>{
         this.setState({
             [e.target.name] : e.target.value
         })
     }

    nextStep = ()=>{
        let cStep = this.state.step
        this.setState({
            step : cStep + 1
        })
    }
    lastStep = ()=>{
        let cStep = this.state.step
        this.setState({
            step : cStep - 1
        })
    }
    
     render() 
     { 
        switch(this.state.step){
            case 0: {
                return <P0 state={this.state} onChange={this.onChange} nextStep={this.nextStep} lastStep={this.lastStep}/>
            }
            case 1: {
                return <P1 state={this.state} onChange={this.onChange} nextStep={this.nextStep} lastStep={this.lastStep}/>
            }
            case 2: {
                return <P2 state={this.state} onChange={this.onChange} nextStep={this.nextStep} lastStep={this.lastStep}/>
            }
            case 3: {
                return <P3 state={this.state} onChange={this.onChange} nextStep={this.nextStep} lastStep={this.lastStep}/>
            }
        }
    }
}
 
export default Form;