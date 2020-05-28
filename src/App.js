import React from 'react';
import jobListingsData from './data.json';
import './App.css';
import JobListing from './JobListing';

function App() {
   
  return (
    <div className="App">
      {jobListingsData.map ((jobListing) => 
        < JobListing  jobListing= {jobListing} /> 

      )}
    </div>
  );
}

export default App;
