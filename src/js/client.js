import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";

import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";

export const Loading = () => <div></div>;

const ResumePageLoadable = Loadable({
  loader: () => import("./pages/ResumePage"),
  loading: Loading,
});

const PortfolioPageLoadable = Loadable({
  loader: () => import("./pages/PortfolioPage"),
  loading: Loading,
});

const UIPortfolioPageLoadable = Loadable({
  loader: () => import("./uiportfolio/UIPortfolioPage"),
  loading: Loading,
});

const AdaptTranslationsLoadable = Loadable({
  loader: () => import("./uiportfolio/portfolio-entries/AdaptTranslations"),
  loading: Loading,
});

const UnoPortInnLoadable = Loadable({
  loader: () => import("./uiportfolio/portfolio-entries/UnoPortInn"),
  loading: Loading,
});

const UnoPortArtFilmsLoadable = Loadable({
  loader: () => import("./uiportfolio/portfolio-entries/UnoPortArtFilms"),
  loading: Loading,
});

const GreoLoadable = Loadable({
  loader: () => import("./uiportfolio/portfolio-entries/Greo"),
  loading: Loading,
});

ReactDOM.render(
  <HashRouter>
    <main>
      <Switch onUpdate={() => window.scrollTo(0, 0)}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume" component={ResumePageLoadable} />
        <Route path="/portfolio" component={PortfolioPageLoadable} />
        <Route path="/contact" component={ContactPage} />

        <Route exact path="/ui-portfolio" component={UIPortfolioPageLoadable} />
        <Route
          path="/ui-portfolio/adapt-translations"
          component={AdaptTranslationsLoadable}
        />
        <Route path="/ui-portfolio/unoportinn" component={UnoPortInnLoadable} />
        <Route
          path="/ui-portfolio/unoportartfilms"
          component={UnoPortArtFilmsLoadable}
        />
        <Route path="/ui-portfolio/greo" component={GreoLoadable} />
      </Switch>
    </main>
  </HashRouter>,
  document.getElementById("app")
);
