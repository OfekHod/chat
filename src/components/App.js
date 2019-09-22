import React from 'react';
import '../styles/App.css';
import Message from './Message.js';
import Bar from './Bar.js';

function App() {
  return (
    <div className="App" style = {divStyle}> 
      <Bar content="Chat"/>
      <div className="message-window">
        <Message sender="Ofek" date="22/09/2019 14:43" content="Hey, how are you?"/>
        <Message sender="Shahar" date="22/09/2019 14:43" content="I'm fine, thank you Ofek!"/>
        <Message sender="Ofek" date="22/09/2019 14:43" content="Well, how is this chat?"/>
        <Message sender="Shahar" date="22/09/2019 14:43" content="Man this is great!! we should talk here all the time"/>
        <Message sender="Ofek" date="22/09/2019 14:43" content=";)"/>
      </div>
      <Bar content=""/>        
    </div>
  );
}

// Without this white borders appears
var divStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 0,
  padding: 0
}

export default App;
