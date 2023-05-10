import { JobListing } from '../types';
import { JobItem } from './JobItem';

interface JobListingProps {
  jobs: JobListing[];
}

export const JobList = ({ jobs }: JobListingProps) => {
  return (
    <div className="flex flex-col">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};
