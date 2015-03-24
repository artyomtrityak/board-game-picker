import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
  render() {
    return (
      <div className="jumbotron" style={{textAlign: 'center'}}>
        <h1>
          Marketing stuff!
        </h1>
        <p className="lead">
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.
        </p>
        <p>
          <Link className="btn btn-lg btn-success" to="games-picker">
            Choose your perfect board game
          </Link>
        </p>
      </div>
    )
  }
});