import React from 'react';
import Moment from 'moment';
import { ListGroupItem } from 'react-bootstrap';

export const MessageListEntry = (props) => {
  return (
    <div>
      {props.side === "L" ? <img className='bubbleImageLeft' src={props.message.photo} /> : <div></div>}
      <li className={props.side === 'L' ? 'bubbleLeft' : 'bubbleRight'}>
        <div >
          {
            props.message.username + ': '
            + props.message.message
          }
        </div>
        <div>{Moment(props.message.createdAt).fromNow()}</div>
      </li>
    </div>
  );
};


// style={props.isUser ? {color: 'blue', 'textAlign': 'right', 'paddingRight': '10px'} : {color: 'green'}}

// style={{width:'100%', color:'white'}}