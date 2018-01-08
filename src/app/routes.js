import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../app/index';
// import Page1 from './components/modules/page1';
// import Page2 from './components/modules/page2';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </Switch>
  </main>
)

export default Routes;