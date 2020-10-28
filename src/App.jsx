import React from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import PatientForecast from './components/patientForecast/PatientForecast';
import Pricing from './components/pricing/Pricing';
import PricingEvents from './components/pricingEvents/PricingEvents';
import PricingDosing from './components/pricingDosing/PricingDosing';
import PricingSummary from './components/pricingSummary/PricingSummary';
import DemoPage from './components/demoPage/DemoPage';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header
        title={"Nov Pricing"}
      />
      <div className="contents">
        <Navigation forecastSelected={true} />
        <div className="body">
          <NavLink to="/">
            all components
          </NavLink>
          <Switch>
            <Route exact path="/">
              <DemoPage />
            </Route>
            <Route exact path="/patient-forecast">
              <PatientForecast />
            </Route>
            <Route path="/pricing/all">
              <Pricing />
            </Route>
            <Route path="/pricing/events">
              <PricingEvents />
            </Route>
            <Route path="/pricing/dosing">
              <PricingDosing />
            </Route>
            <Route path="/pricing/summary">
              <PricingSummary />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;