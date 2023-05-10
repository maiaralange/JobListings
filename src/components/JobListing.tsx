import { JobListing } from '../types';
import { JobItem } from './JobItem';

interface JobListingProps {
  jobs: JobListing[];
}

export const JobList = ({ jobs }: JobListingProps) => {
  return (
    <div className="flex flex-col items-center gap-5 p-10">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};
