import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Router, Route, Redirect } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Layout from './components/Layout';
import VoteController from './components/VoteController';

import { About } from './components/About';

const mainComponent = <VoteController />;

const history = createHashHistory({
  queryKey: false
});

const router = <Router history={history}>
  <Redirect from='/' to='/home' />
  <Route path='/home' component={Layout} />
  <Route path='/about' component={About} />
</Router>;

/* ReactDOM.render(
  <Layout>{mainComponent}</Layout>,
  document.getElementById('voteAppMountPoint')
); */


ReactDOM.render(
  router,
  document.getElementById('voteAppMountPoint')
);
