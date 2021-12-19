import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { CharacterDetails } from 'screens/CharacterDetails';
import { Characters } from 'screens/Characters';
import { EpisodeDetails } from 'screens/EpisodeDetails';
import { Episodes } from 'screens/Episodes';
import { LocationDetails } from 'screens/LocationDetails';
import { Locations } from 'screens/Locations';

export const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/characters" />
        </Route>
        <Route path="/characters" exact>
          <Characters />
        </Route>
        <Route path="/characters/:id" exact>
          <CharacterDetails />
        </Route>
        <Route path="/locations" exact>
          <Locations />
        </Route>
        <Route path="/locations/:id" exact>
          <LocationDetails />
        </Route>
        <Route path="/episodes" exact>
          <Episodes />
        </Route>
        <Route path="/episodes/:id" exact>
          <EpisodeDetails />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
