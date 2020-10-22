import React from 'react';
import Header from './components/common/Header';
import Input from './components/common/Input';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header
        title={"Nov Pricing"}
      />
      <Input />
      <Input disabled={true} />
    </div>
  );
}

export default App;
