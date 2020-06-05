import React, {useState}  from 'react';
import jobListingsData from './data.json';
import './App.css';
import JobListing from './JobListing';
import Favorites from './Favorites';
import { ReactComponent as Header } from './bg-header-desktop.svg'

function App() {
  const [jobData, setJobData] = useState(jobListingsData)
  const [jobFilter, setJobFilter] = useState([]);

  const addFilter = (e) => {
    if (!jobFilter.includes(e.target.value)) {
      setJobFilter([...jobFilter, e.target.value]);
    }
  };
  
  const removeFilter = (removedItem) => {
    setJobFilter(jobFilter.filter((item) => item.id !== removedItem.id))
    setJobData([...jobFilter,removedItem])
  }
   
  return (
    <div className="App">
      <Header className='header'/>
      <Favorites jobFilter={jobFilter}
                 addFilter={addFilter}
                 removeFilter={removeFilter}/>
      {jobData.map ((jobListing) => 
        < JobListing  jobListing= {jobListing}
                      addFilter={addFilter}
                      removeFilter={removeFilter} /> 
      )}
    </div>
  );
}

export default App;
