import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {    
    return (
      <div>
        {this.props.step.get('text')}
      </div>
    )
  }
});