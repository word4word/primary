import React from 'react'
import socket from '../../socket'


class SpeechRoom extends React.Component {

  clicked(e){
    var room = e.target.id
    socket.emit("createRoom",room)
  }

  render () {
	return(
		<div className="speechroom">
			<a id ="speech" onClick ={this.clicked.bind(this)} className="gamebutton">
      Play in the Speech Room
    </a>
		</div> 
	)
  }
}

export default SpeechRoom