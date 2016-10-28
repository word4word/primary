import React from "react"

export class Header extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<h1><a href = '/'>Word4Word</a></h1>
					</div>
				</div>
			</nav>
			)
	}
}

