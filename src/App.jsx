import React from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import PatientForecast from './components/patientForecast/PatientForecast';
import Pricing from './components/pricing/Pricing';
import Input from './components/common/Input';
import Textarea from './components/common/Textarea';
import SearchField from './components/searchField/searchField';
import Dropdown from './components/common/Dropdown';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title={"Nov Pricing"}
      />
      <div className="contents">
        <Navigation forecastSelected={true} />
        <div className="body">
          <Input />
          <Input disabled={true} />
          <Input label='Form Label' />
          <SearchField />
          <Textarea label='Text (Optional)' />
          <Dropdown label='Dropdown Label' options={[{ value: 'USA', title: 'USA' }, { value: 'EMEA', title: 'EMEA' }]} />
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
