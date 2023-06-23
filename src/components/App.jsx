import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './';

import userStyles from './styles';

const App = () => {
  const classes = userStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router>
        <Route exact path="/movie/:id">
          <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
          <Actors />
          </Route>
          <Route exact path={["/", "/approved"]}>
          <Movies />
          </Route>
          <Route exact path="/profile/:id">
          <Profile />
          </Route>
        </Router>
      </main>
    </div>
  )
}

export default App
