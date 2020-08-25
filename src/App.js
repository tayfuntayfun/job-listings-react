import React, { useState } from "react";
import data from "./data.json";
import "./App.css";
import JobListing from "./components/JobListing";
import Favorites from "./components/Favorites";
import { ReactComponent as Header } from "./bg-header-desktop.svg";

function App() {
  const [jobFilter, setJobFilter] = useState([]);

  const addFilteredTag = (e) => {
    if (!jobFilter.includes(e.target.value)) {
      setJobFilter([...jobFilter, e.target.value]);
    }
  };

  const removeFilter = (removedItem) => {
    setJobFilter(jobFilter.filter((item) => item !== removedItem));
  };

  const filterByTags = () => {
    return data.filter((jobs) =>
      jobFilter.every(
        (value) =>
          jobs.languages.includes(value) ||
          jobs.role.includes(value) ||
          jobs.level.includes(value)
      )
    );
  };

  return (
    <div className="App">
      <Header className="header" />
      <Favorites
        jobFilter={jobFilter}
        removeFilter={removeFilter}
        setJobFilter={setJobFilter}
      />
      {filterByTags().map((item, i) => (
        <JobListing
          jobListing={item}
          key={i}
          addFilter={addFilteredTag}
          removeFilter={removeFilter}
        />
      ))}
    </div>
  );
}

export default App;
