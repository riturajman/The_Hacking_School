import React, { Component } from 'react';

class Display extends Component {
    state = {  }
    const language = ["All", "JavaScript", "Python", "Ruby"] 
    render() { 
        return (  );
    }
}
 

class ColorChange extends Component {
    state = { 
        selectedLanguage : 'All'
     }

    onStateChange = ()=>{

    }
    
    render() { 
        return ( 
            <Display />
         );
    }
}
 
export default ColorChange;