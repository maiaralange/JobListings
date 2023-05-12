import { useEffect, useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Header } from './components/Header';
import { JobList } from './components/JobListing';
import { FilterProvider } from './hooks/useFilter';
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

function App() {
  const [jobs, setJobs] = useState([] as JobListing[]);

  useEffect(() => {
    const data = get();
    setJobs(data);
  }, []);

  return (
    <FilterProvider>
      <div className="min-h-screen bg-light-grayish-cyan">
        <Header />
        <FilterBar />
        <JobList jobs={jobs} />
      </div>
    </FilterProvider>
  );
}

export default App;
