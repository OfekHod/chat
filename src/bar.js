import React from 'react';
import './bar.css';

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