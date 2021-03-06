import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat/1" render={() => <Home name="Andrew" />} />
        <Route exact path="/chat/2" render={() => <Home name="Bart" />} />
        <Route exact path="/chat/3" render={() => <Home name="Tom" />} />
        <Route exact path="/chat/4" render={() => <Home name="John" />} />
        {/* <Route exact path="/not-home" render = { () => <div>This is not your Home. Get out!</div> } /> */}
      </Switch>
    );
  }
};