import React from 'react';
import {Link, RouteHandler} from 'react-router';

export default class NoopComponent extends React.Component {
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
}