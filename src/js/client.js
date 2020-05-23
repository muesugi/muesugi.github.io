import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import UIPortfolioPage from "./uiportfolio/UIPortfolioPage";
import ContactPage from "./pages/ContactPage";

import AdaptTranslations from "./uiportfolio/portfolio-entries/AdaptTranslations";
import UnoPortInn from "./uiportfolio/portfolio-entries/UnoPortInn";
import UnoPortArtFilms from "./uiportfolio/portfolio-entries/UnoPortArtFilms";
import Greo from "./uiportfolio/portfolio-entries/Greo";

ReactDOM.render(
  <HashRouter>
    <main>
      <Switch onUpdate={() => window.scrollTo(0, 0)}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route exact path="/ui-portfolio" component={UIPortfolioPage} />
        <Route
          path="/ui-portfolio/adapt-translations"
          component={AdaptTranslations}
        />
        <Route path="/ui-portfolio/unoportinn" component={UnoPortInn} />
        <Route
          path="/ui-portfolio/unoportartfilms"
          component={UnoPortArtFilms}
        />
        <Route path="/ui-portfolio/greo" component={Greo} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </main>
  </HashRouter>,
  document.getElementById("app")
);
