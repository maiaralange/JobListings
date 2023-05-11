import { useEffect, useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Header } from './components/Header';
import { JobList } from './components/JobListing';
import { TagType } from './components/Tag';
import { get } from './services/api';

export interface JobListing {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface Filter {
  type: TagType;
  name: string;
}

function App() {
  const [jobs, setJobs] = useState([] as JobListing[]);
  const [filter, setFilter] = useState([] as Filter[]);

  useEffect(() => {
    const data = get();
    setJobs(data);
  }, []);

  return (
    <div className="h-full bg-light-grayish-cyan">
      <Header />
      <FilterBar filterItems={filter} />
      <JobList jobs={jobs} updateFilter={setFilter} />
    </div>
  );
}

export default App;
