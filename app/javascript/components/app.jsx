import React from 'react';
import {Link, RouteHandler} from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <Link to='hello'>Hello</Link>
        <Link to='games-picker'>Start</Link>
        <Link to='contacts'>Contacts</Link>
        <div>
          <RouteHandler />
        </div>
      </div>
    )
  }
});