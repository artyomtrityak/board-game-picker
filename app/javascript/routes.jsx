import React from 'react'
import {Route, DefaultRoute} from 'react-router';
import Router from 'react-router';

// Components
import NoopComponent from './components/noop'

var routes = (
  <Route name='app' path='/' handler={NoopComponent}>
    
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('react-root'));
});