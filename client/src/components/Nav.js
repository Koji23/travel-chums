import React from 'react';
import {Link} from 'react-router';

var nav = {
    'backgroundColor': '#0898A1',
    'height': '100px',
    'position': 'relative'
}

var header = {
  'textAlign': 'center',
  'position': 'relative',
  'font': '2em "Open Sans", sans-serif',
  'color': 'white',
  'top': '35px'
}

var leftButton = {
    'textAlign': 'left',
    'left': '10px',
    'position': 'absolute',
  'font': '1.3em "Open Sans", sans-serif',
  'color': 'white',
  'top': '35px'
}

const HomeNav = (props) => {
  return (
    <nav style={nav}>
      <div style={header}>{ props.header }</div>
      <Link to="/" style={leftButton}>Home</Link>
    </nav>
  )
}


export {HomeNav}

