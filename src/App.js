import React from 'react';
import data from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
     {data[0].position}
    </div>
  );
}

export default App;
