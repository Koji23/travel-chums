import React from 'react';
import { Panel, ListGroup } from 'react-bootstrap';
import { MessageListEntry } from './MessageListEntry';


export const MessageList = (props) => {
  var bubble = {
    position: 'relative',
    width: '250px',
    height: '120px',
    padding: '0px',
    background: '#FFFFFF',
    border: '#7F8A7F solid 2px'
  }
  return (
    <div style={{border: '1px solid black',fontWeight: 'bold', backgroundColor: '#CCC', paddingTop: '10px'}} >
      <ul fill>
        {props.messages.map((message, index) => {
          if(message.username === props.username) {
            return <MessageListEntry side="R" message={message} key={index} isUser={true}/>;     
          } else {
            return <MessageListEntry side="L" message={message} key={index} isUser={false}/>;   
          }
        })}
      </ul>
    </div>
  );
};



// .bubble:after 
// {
// content: '';
// position: absolute;
// border-style: solid;
// border-width: 14px 26px 14px 0;
// border-color: transparent #FFFFFF;
// display: block;
// width: 0;
// z-index: 1;
// margin-top: -14px;
// left: -26px;
// top: 64%;
// }

// .bubble:before 
// {
// content: '';
// position: absolute;
// border-style: solid;
// border-width: 15px 27px 15px 0;
// border-color: transparent #7F8A7F;
// display: block;
// width: 0;
// z-index: 0;
// margin-top: -15px;
// left: -29px;
// top: 64%;
// }