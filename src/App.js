import React from 'react';
import './App.css';
import Message from './message.js';
import Bar from './bar.js';

function App() {
  return (
    <div className="App"> 
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

export default App;
