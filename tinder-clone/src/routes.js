import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import TinderCards from './components/TinderCards';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={TinderCards} />
        <Route path="/chat" component={() => <h1>Chat page</h1>} />
      </Switch>
    </>
  );
}
