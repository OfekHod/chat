import React from 'react';
import './App.css';

class Message extends React.Component {
 render() {
   return (
     <p className="message">
       {this.props.message}
     </p>
   );
 }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chat.
        </p>
        <Message message="Ofek gever"/>
      </header>
    </div>
  );
}

export default App;
