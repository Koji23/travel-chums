import React from 'react';
import {Link} from 'react-router';
import {Glyphicon} from 'react-bootstrap';


var header = {
  'textAlign': 'center',
  'position': 'relative',
  'font': '2em "Open Sans", sans-serif',
  'color': 'white',
  'top': '35px'
}

var leftButton = {
  'textAlign': 'left',
  'left': '50px',
  'position': 'absolute',
  'font': '1.3em "Open Sans", sans-serif',
  'color': 'white',
  'top': '35px'
}

var rightButton = {
  'textAlign': 'right',
  'right': '10px',
  'position': 'absolute',
  'font': '1.3em "Open Sans", sans-serif',
  'color': 'white',
  'top': '35px'
}


var glyphNav = {
  'font-size':'3em',
  'top': '-10px',
  'right': '20px'
}

const HomeNav = (props) => {
  return (
    <nav className='navClass'>
      <div style={header}>{ props.header }</div>
      <Link to="/" style={leftButton}><Glyphicon glyph="home" style={glyphNav}/></Link>
      <Link to="/" style={rightButton}><Glyphicon glyph="cog" style={glyphNav}/></Link>
    </nav>
  )
}


export {HomeNav}



