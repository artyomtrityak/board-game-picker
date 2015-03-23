import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    var answers = this.props.step.get('answers').toArray().map(item => {
      return <Link
        key={item.get('next')}
        to="games-picker-step"
        params={{stepId: item.get('next')}} >
        {item.get('text')}
      </Link>;
    });
    
    return (
      <div>
        <div>{this.props.step.get('text')}</div>
        {answers}
      </div>
    )
  }
});