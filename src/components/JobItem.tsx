import { JobListing } from '../types';

interface JobItemProps {
  job: JobListing;
}

export const JobItem = ({ job }: JobItemProps) => {
  return <div>{job.company}</div>;
};
