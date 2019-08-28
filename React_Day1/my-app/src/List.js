import React from 'react';

class List extends React.component{
   render(){
    return(
        <div>
        <h1>List</h1>
        {this.props.contact.map((data)=>(
            <div>
            <h2>{data.name} : {data.handle}</h2>
            <img scr={data.avatarURL} style={{width:"300px"}}/>
            </div>
    ))
    }
    </div>
    )
}
}