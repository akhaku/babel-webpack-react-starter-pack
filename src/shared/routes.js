import React from 'react';
import {Router, Route} from 'react-router';

import Home from 'app/shared/components/Home';

const Routes = (
  <Router>
    <Route path="/" component={Home}/>
  </Router>
);

export default Routes;
