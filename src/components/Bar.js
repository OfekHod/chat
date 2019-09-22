import React from 'react';
import '../styles/Bar.css';

class Bar extends React.Component {
  render() {
    return(
      <div className="bar">
          {this.props.content}
      </div>
      )
  }
}

export default Bar;