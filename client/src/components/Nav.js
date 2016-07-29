import React from 'react';
import {Link} from 'react-router';

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

const HomeNav = (props) => {
    return (
        <nav style={nav}>
            <Link to="/">itineraryList</Link>
            <Link to="addItinerary">addItinerary</Link>
            <Link to="groupchatroom">groupChatRoom</Link>
            <Link to="login">Login</Link>
        </nav>
    )
}

// const AddItineraryNav = (props) => {
//     return (
//         <nav >
//             <Link to="/">itineraryList</Link>
//             <Link to="addItinerary">addItinerary</Link>
//             <Link to="groupChat">groupChatRoom</Link>
//         </nav>
//     )
// }

export {HomeNav}

            // <div style={header}>{ props.header }</div>
    // <div style={nav} >
    //     <div style={leftButton} onClick={() => {
    //         if (props.leftButton === 'Home') {
    //             props.changePageToRender('itineraryList')
    //         }
    //     }}> { props.leftButton }</div>
    // </div>

