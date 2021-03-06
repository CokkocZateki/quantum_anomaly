import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import UnderConstruction from './components/UnderConstruction';
import NotFound from './components/NotFound';

import Home from './components/Home';
import Admin from './components/Admin';
import ShipSelector from './containers/eve-fitting-tool/Selection-Screen';
import ShipView from './containers/eve-fitting-tool/Fitting-Screen';
import EpicArcsOverview from './containers/epic-arcs/Overview';
import EpicArc from './containers/epic-arcs/EpicArc';

import Skills from './containers/legacy/Efs/Skills/';
import Incursions from './containers/legacy/Incursions/';
import Warframe from './containers/legacy/Warframe/';

const App = () => (
  <React.Fragment>
    <header className="page-content-header">
      <Navigation />
    </header>
    <main className="page-content-main">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/eve-fitting-simulator' component={ShipSelector} />
        <Route exact path='/eve-fitting-simulator/:shipId' component={ShipView} />
        <Route path='/skills' component={Skills} />
        <Route exact path='/epic-arcs/' component={EpicArcsOverview} />
        <Route exact path='/epic-arcs/:faction/:mission' component={EpicArc} />
        <Route path='/incursion-manager' component={Incursions} />
        <Route path='/warframe' component={Warframe} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
    <footer className="page-content-footer">
      <Footer />
    </footer>
  </React.Fragment>
);

export default App;
