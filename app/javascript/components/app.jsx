import React from 'react';
import {Link, RouteHandler} from 'react-router';
import classNames from 'classnames';


export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    var helloCls,
        pickerCls,
        router = this.context.router;

    helloCls = classNames({
      active: router.isActive('hello')
    });

    pickerCls = classNames({
      active: router.isActive('games-picker') || router.isActive('games-picker-step')
    });

    return (
      <div>        
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Я (сердечко) настолочки</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className={helloCls}>
                  <Link to='hello'>Just to say Hello</Link>
                </li>
                <li className={pickerCls}>
                  <Link to='games-picker'>What board game should i pick?</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});