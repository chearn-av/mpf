import React from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import PatientForecast from './components/patientForecast/PatientForecast';
import Pricing from './components/pricing/Pricing';
import Input from './components/common/Input';
import SearchField from './components/searchField/searchField'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title={"Nov Pricing"}
      />
      <div className="contents">
        <Navigation />
        <div className="body">
          <Input />
          <Input disabled={true} />
          <Input label='Form Label'/>
          <SearchField />
          <Switch>
            <Route exact path="/">
              <PatientForecast />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;