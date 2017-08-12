import React from "react";
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

ReactDOM.render(
  <HashRouter>
    <main>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/resume' component={ResumePage}/>
        <Route path='/portfolio/:skill?' component={PortfolioPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
    </main>
  </HashRouter>,
  document.getElementById('app')
);
