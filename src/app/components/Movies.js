import React from "react"

import socket from '../socket'
import {Gameover} from "./Gameover"
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'




export class Movies extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
    	title: null,
    	answers: [],
    	correctAnswer: null,
    	count:0,
      timer:1000,
      gameover:false

    }
  }


  componentDidMount () {
  	socket.emit("needQuestion",true)
  	socket.on("question",function(data){
  		console.log("title",data)
  		this.setState({
  				title:data.title,
  				answers:[data.a,data.b,data.c,data.d],
  				correctAnswer: data.correct,
  				count: this.state.count+1
  		})
  	}.bind(this))

  	socket.on("gameover",function(data){
      this.setState({count:0,gameover:true})
    }.bind(this))
  }


  answerClick(e){
  	var id = e.target.id
  	var convert = function(answer){
	  	if(answer === "a"){
	  		answer = 0
	  	}else if(answer === "b"){
	  		answer = 1
	  	}else if(answer === "c"){
	  		answer = 2
	  	}else{
	  		answer = 3
	  	}
	  	return answer.toString()
  	}
  	var answer = convert(this.state.correctAnswer)
  	if(answer === id){
  		socket.emit("answer",true)
  	}else{
  		 socket.emit("answer",false)
  	}
  }

  navigate(){
    console.log(this.props)
    this.props.router.push("/")
  }
  render(){ 
    return(
      <div id="speech" className="container">
        <div>This is the Video: {this.state.title}</div>
        <div>{this.state.count}/5</div>
        <div>{this.state.timer}</div>
        {
          this.state.gameover ?
            <button onClick={this.navigate.bind(this)}></button>
          :
          this.state.answers.map(function(x,i){
          return (
            <div key={i}>
              <button id={i} onClick={this.answerClick.bind(this)} type="button" className="btn btn-default">{x}</button><br></br>
            </div>
          )
        }.bind(this))

        }

      </div>      
      )
  }
}