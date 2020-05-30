import React from 'react';
import jobListingsData from './data.json';
import './App.css';
import JobListing from './JobListing';
import { ReactComponent as Header } from './bg-header-desktop.svg'

function App() {
   
  return (
    <div className="App">
      <Header className='header'/>
      {jobListingsData.map ((jobListing) => 
        < JobListing  jobListing= {jobListing} /> 
      )}
    </div>
  );
}

export default App;
