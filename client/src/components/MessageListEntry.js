import React from 'react';
import Moment from 'moment';
import { ListGroupItem } from 'react-bootstrap';

export const MessageListEntry = (props) => (
  <li style={props.isUser ? {color: 'blue', 'textAlign': 'right', 'paddingRight': '10px'} : {color: 'green'}}>
    <div style={{width:'100%'}}>
      {
        props.message.username + ' '
        + props.message.message + ' '
        + Moment(props.message.createdAt).fromNow()
      }
    </div>
  </li>
);
