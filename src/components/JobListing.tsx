import { Filter, JobListing } from '../App';
import { JobItem } from './JobItem';

interface JobListingProps {
  jobs: JobListing[];
  updateFilter: React.Dispatch<React.SetStateAction<Filter[]>>;
}

export const JobList = ({ jobs, updateFilter }: JobListingProps) => {
  return (
    <div className="flex flex-col items-center gap-5 py-10">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} updateFilter={updateFilter} />
      ))}
    </div>
  );
};
