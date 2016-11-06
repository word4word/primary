import React from 'react'
import CurrentUsers from './CurrentUsers'


const UserPanel= (props) =>{
 
 console.log('up props', props)
	return(
		<div className="userwrap">
			<div className="currentuser">
		    <div className="currentavi"><img src={props.avi}></img></div>
	      <div className="currentname"><p className="name">{props.name}</p></div>
			</div>
			<div className="loggedin">
	      {props.users.map((user, i) => 
	        <CurrentUsers users={user} key={i}/>
	      )} 
			</div>
		</div> 
	)

}

export default UserPanel 