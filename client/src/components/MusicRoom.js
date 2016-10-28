import React from 'react'
import socket from '../../socket'


class MusicRoom extends React.Component {

  clicked(e){
    var room = e.target.id
    socket.emit("createRoom",room)
  }


  render () {
	return(
		<div className="musicroom">
		<a id='music' onClick ={this.clicked.bind(this)} className="gamebutton">
      Play in the Music Room
    </a>
			
		</div> 
	)
  }
}

export default MusicRoom