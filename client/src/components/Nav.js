import React from 'react';

import AppBar from 'material-ui/AppBar';

var nav = {
	'background-color': '#be39c5',
	'height': '100px',
	'position': 'relative'
}

var header = {
  'text-align': 'center',
  'position': 'relative',
  'font': '2em "Open Sans", sans-serif',
  'color': 'white',
  'top': '35px'
}

var leftButton = {
	'text-align': 'left',
	'left': '10px',
	'position': 'absolute',
  'font': '1.3em "Open Sans", sans-serif',
  'color': 'white',
  'top': '35px'
}

export const Nav = (props) => (
	<div style={nav} >
		<div style={header}>{ props.header }</div>
		<div style={leftButton} onClick={() => {
			if (props.leftButton === 'Home') {
				props.changePageToRender('itineraryList')
			}
		}}> { props.leftButton }</div>
	</div>
)

