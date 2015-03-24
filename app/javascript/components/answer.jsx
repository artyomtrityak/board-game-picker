import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
  render() {    
    return (
      <div className="jumbotron">
        <h1 style={{textAlign: 'center'}}>{this.props.step.get('text')}</h1>
      </div>
    )
  }
});