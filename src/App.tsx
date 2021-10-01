import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Characters } from 'screens/Characters';
import { Episodes } from 'screens/Episodes';
import { Locations } from 'screens/Locations';

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/characters" />
      </Route>
      <Route path="/characters" exact>
        <Characters />
      </Route>
      <Route path="/locations" exact>
        <Locations />
      </Route>
      <Route path="/episodes" exact>
        <Episodes />
      </Route>
    </Switch>
  );
};
