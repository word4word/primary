import React from "react"

export class Home extends React.Component{
	render(){
		return(
			<div>
			<a href="/auth/facebook">
				<button type="button" className="btn btn-outline-success btn-lg">Please Login</button>
			</a>
			</div>			
			)
	}
}