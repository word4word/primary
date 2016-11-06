import React from 'react'
import LeaderBoard from './Leaderboard'
import UserPanel from './UserPanel'
import GameRoom from './GameRoom'
import socket from '../../socket'
import Game from './game'



class RealLobby extends React.Component {

  constructor (props) {
    super(props); 
    this.state = {
      current: [],
      users: [], 
      admin: false,
      route: null
    }
  }

  componentDidMount () {
    $.get('/user')
      .then(user => {
        console.log('this is the returned get user', user)
        this.name = user.name
        this.avi = user.profileImage
      })
    
   // socket.on("getUsers",function(users){
   //    this.setState({
   //      current:users})
   //    console.log("Current Users Online:", users)
   //  }.bind(this))
   //  socket.emit("inLobby",true)
   
    socket.on("getUsers", function(data){
      $.get('/current')
      .then(currentusers =>{
        console.log('these are the users from the db', currentusers)
        this.setState({
          current: currentusers
        })
      })
    }.bind(this))

    socket.on("admin",function(data){
      this.setState({admin:data})
    }.bind(this))

   
    $.get('/score')
    .then(users => {
      console.log('Got users: ', users);
      this.setState({
       users: users
      })
    })

    socket.on("roomchange",function room(room) {
      this.setState({route:room})
    }.bind(this))

  }

  clicked(e){
    var room = e.target.id
    socket.emit("createRoom",room)
  }

  render () {
    return (
      <div>

      { 
        this.state.route ?
        <Game lobbyname={this.state.route} admin ={this.state.admin}/>
        :
        <div className='lobby'>
          <div className="lobbyLabels">
            <div id="users">
            <UserPanel name={this.name} avi={this.avi} users={this.state.current}/>
            </div>
            <LeaderBoard leaders={this.state.users}/>
          </div>
          <GameRoom onClick={this.clicked.bind(this)}/> 
        </div>        
      }
          
      </div>
    )
  }
}

export default RealLobby