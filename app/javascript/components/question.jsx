import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
  render() {
    var answers = this.props.step.get('answers').toArray().map(item => {
      return <div className="btn-group" role="group" key={item.get('next')}>
        
        <Link className="btn btn-default"
          to="games-picker-step"
          params={{stepId: item.get('next')}}>
          
          {item.get('text')}
        </Link>
      </div>;
    });
    
    return (
      <div>
        <div className="jumbotron">
          <h2 style={{textAlign: 'center'}}>{this.props.step.get('text')}</h2>
        </div>
        <div className="btn-group btn-group-justified" role="group">
          {answers}
        </div>
      </div>
    )
  }
});