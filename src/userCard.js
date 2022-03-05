import React from 'react'

const UserCard=(props)=>{
    return(
        <div className="ui card">
  
  <div className="content">
    <a className="header">User details</a>
   
    <div className="description">
      {props.children}
    </div>
  </div>
  <div className='ui button botton'>
      <i className='add icon'></i>Add friend
  </div>
  
</div>
    )
}

export default UserCard;