import React, { Component } from 'react';
import LangAPI from './LangAPI'

const language = ["All", "JavaScript", "Python", "Ruby"]

class ColorChange extends Component {
    state = {
        selectedLanguage: 'All'
    }
    

    onStateChange = (lang) => {
        this.setState({
            selectedLanguage : lang
        })
    }

    render() {
        return(
            <div>
            <div style={{display:"flex"}}>
            {language.map((data)=>(
                <ul onClick={()=>this.onStateChange(data)} style={(data == this.state.selectedLanguage) ? {color:"#d0021b"} : null }>{data}</ul>
            ))}
            </div>
            <LangAPI />

            </div>
            
        )
    }
}

export default ColorChange;