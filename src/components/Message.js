import React from 'react';
import '../styles/Message.css';

class Message extends React.Component {
 render() {
   return (
     <div className="message">
       <div className="message-details">
          <div className="message-sender">
            {this.props.sender}
          </div>
          <div className="message-date">
            {this.props.date}
          </div>
        </div>
        <div className="message-content">
          {this.props.content}
        </div>
     </div>
   );
 }
}

export default Message;