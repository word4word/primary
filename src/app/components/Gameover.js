import React from "react"
import socket from '../socket'


export class Gameover extends React.Component{
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
  	
  }


  render(){ 
    return(
      <div className="container">
       <h1>Gameover</h1>
      </div>      
      )
  }
}