import React from 'react'
import socket from '../../socket'


class MixedRoom extends React.Component {

  clicked(e){
    var room = e.target.id
    socket.emit("createRoom",room)
  }

  render () {
	return(
		<div className="mixedgame">
		<a id='mix' onClick ={this.clicked.bind(this)} className="gamebutton">
      Play in the Grab Bag Room
    </a>
			
		</div> 
	)
  }
}


export default MixedRoom