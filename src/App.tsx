import React from 'react';
import './App.css';
import Main from 'components/04-pages/Main';
import Planets from 'components/01-molecules/Planets';

function App() {
  return (
    <div className="App">
      <Planets />
      <Main />
    </div>
  );
}

export default App;
