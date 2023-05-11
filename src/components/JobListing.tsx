import { JobListing } from '../App';
import { useFilter } from '../hooks/useFilter';
import { JobItem } from './JobItem';
import { TagType } from './Tag';

interface JobListingProps {
  jobs: JobListing[];
}

export const JobList = ({ jobs }: JobListingProps) => {
  const { filter } = useFilter();
  const map: { [key in TagType]: (job: JobListing, name: string) => boolean } =
    {
      [TagType.Role]: (job, name) => job.role == name,
      [TagType.Level]: (job, name) => job.level == name,
      [TagType.Language]: (job, name) =>
        Boolean(job.languages.find((language) => language == name)),
      [TagType.Tool]: (job, name) =>
        Boolean(job.tools.find((tool) => tool == name))
    };

  return (
    <div className="flex flex-col items-center gap-5 py-10">
      {jobs
        .filter((job) =>
          filter.reduce(
            (acc, item) => acc && map[item.type](job, item.name),
            true
          )
        )
        .map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
    </div>
  );
};
