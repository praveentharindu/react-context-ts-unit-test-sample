import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { HomeScreen } from '../../homeScreen/HomeScreen';
import { AboutScreen } from '../../aboutScreen/AboutScreen';

const Main = () => {
  return (
    <Container data-test="main-section">
      <Switch>
        <Route
          data-test="about-router"
          path={'/about'}
          component={AboutScreen}
        />
        <Route data-test="home-router" path={'/'} component={HomeScreen} />
      </Switch>
    </Container>
  );
};

export default Main;
