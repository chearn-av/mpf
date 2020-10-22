import React from 'react';
import Header from './components/common/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header
        title={"Nov Forecast"}
        options={[{ title: 'EMEA', value: 'EMEA' }, { title: 'France', value: 'France' }]}
      />
    </div>
  );
}

export default App;
