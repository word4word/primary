import React from "react"
import socket from '../socket'
import {Movies} from './Movies'
import { Link } from 'react-router'
import ReactDOM from "react-dom";


import {Music} from './Music'
import {Mix} from './Mix'

export class Lobby extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      gameStart: null
    }
  }


  componentDidMount () {
    socket.on("getUsers",function(users){
        //This is were to get all users on server
      console.log("Current Users Online:",users)
    })

    socket.emit("inLobby",true)
  }

  clicked(e){
    var room = e.target.id

    socket.emit("createRoom",room)
    this.props.router.push(room)
  }



  render(){
    return(
      <div className="container">
        {

          // this.state.gameStart === "speech" ?
          // <Movies/>
          // :
          // this.state.gameStart === "music" ?
          // <Music/>
          // :
          // this.state.gameStart === "mix" ?
          // <Mix/>
          // :
          <div>
            <button id="speech" onClick ={this.clicked.bind(this)}type="button" className="btn btn-outline-success btn-lg">Join Speech Room</button>
            <br></br>
            <Link to="music"><button id="music" onClick ={this.clicked.bind(this)}type="button" className="btn btn-outline-success btn-lg">Join Music Room</button></Link>
            <br></br>
            <Link to="mix"><button id="mix" onClick ={this.clicked.bind(this)}type="button" className="btn btn-outline-success btn-lg">Join Mixed Room</button></Link>
          </div>
        }
      </div>      
      )
  }
}
