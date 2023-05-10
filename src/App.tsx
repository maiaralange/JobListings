import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { JobList } from './components/JobListing';
import { get } from './services/api';
import { JobListing } from './types';

function App() {
  const [jobs, setJobs] = useState([] as JobListing[]);

  useEffect(() => {
    const data = get();
    setJobs(data);
  }, []);

  return (
    <div className="h-full bg-light-grayish-cyan">
      <Header />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
