import React from 'react';

class List extends React.Component{
   render(){
    return(
        <div>
        <h1>List</h1>
        {this.props.contact.map((data)=>(
            <div style={{border : '2px dashed aqua'}}>
            <h2>{data.name} : {data.handle}</h2>
            <img src={data.avatarURL} style={{width:"300px"}}/>
            <button onClick={()=>this.props.removeUser(data.id)}>Delete User</button>
            </div>
    ))
    }
    </div>
    )
}
}

export default List