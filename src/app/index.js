import React from "react";
import {render} from "react-dom";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import {Header} from "./components/Header"
import {Home} from  "./components/Home"
import {Lobby} from './components/Lobby'
import {Mix} from './components/Mix'
import {Movies} from './components/Movies'
import {Music} from './components/Music'
import socket from './socket'



class App extends React.Component{

	constructor (props) {
	  super(props)
	  this.state = {
	    currentUser: false
	  }
	  //Bind this to logout so it can be passed down through multiple components
	  this.logout = this.logout.bind(this)
	}

	componentDidMount () {
	//Make and initial get request to sign the user in with Facebook
	//This current user will be used in many places throughout the app.
	  $.get('/user')
	  .then(user => {
	    this.setState({
	      currentUser: user
	    })
	    socket.emit("signedIn",user)
	  })
	  .catch(err => {
	    console.log('App.js - No user is signed in: ', err)
	  })
	}

	logout () {
		this.setState({
		currentUser: false
		})
	}
	
	render(){
		return (
			<div className="container">
				<Header/>

				{
					this.state.currentUser ? 
					<Router history={hashHistory}>
	          <Route path='/' component={Lobby} />
	          <Route path='speech' component={Movies}/>
	          <Route path='mix' component={Mix}/>
	          <Route path='music' component={Music}/>
        	</Router> 
        	: 
     				<Home/>
				}
			</div>
			)
	}
}



render(<App/>,document.getElementById('app'))




