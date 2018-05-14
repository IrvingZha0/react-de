import React from 'react';
import Game from './game';


export default class Hello extends React.Component{

  // const status = 'Next player: X';
  	render() {
	    return (
	    	<div>
		    	<h1>Hello {this.props.name}!</h1> 
		    	<Game />
	    	</div>
	    );
	}
}