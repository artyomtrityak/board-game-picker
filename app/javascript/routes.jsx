import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

// Components
import AppComponent from './components/app';
import NotFoundComponent from './components/not-found';
import HelloComponent from './components/hello';
import GamesPickerComponent from './components/games-picker';
import ContactsComponent from './components/contacts';

//NB: get Routes from modules and pass as {ModuleARoutes}
var routes = (
  <Route name='root' path='/' handler={AppComponent}>
    <Route name='contacts' handler={ContactsComponent} />
    <Route name='games-picker' handler={GamesPickerComponent}>
      <Route name='games-picker-step' path=":stepId" handler={GamesPickerComponent} />
    </Route>
    
    <DefaultRoute name='hello' handler={HelloComponent} />
    
    <NotFoundRoute handler={NotFoundComponent} />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('react-root'));
});