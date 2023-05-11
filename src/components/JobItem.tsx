import { JobListing } from '../types';

interface JobItemProps {
  job: JobListing;
}

export const JobItem = ({ job }: JobItemProps) => {
  return (
    <div className="flex w-4/5 rounded-md bg-white p-5 shadow-lg shadow-desaturated-dark-cyan/30">
      <img src={job.logo} className="h-15 w-15 pr-5" />
      <div className="flex flex-col justify-between py-1">
        <div className="flex items-center gap-2">
          <p className="pr-2 text-sm font-bold text-desaturated-dark-cyan">
            {job.company}
          </p>
          {job.new && (
            <div className="rounded-full bg-desaturated-dark-cyan px-2 py-[2px] text-xs font-bold text-white">
              <span>NEW!</span>
            </div>
          )}
          {job.featured && (
            <div className="rounded-full bg-very-dark-grayish-cyan px-2 py-[2px] text-xs font-bold text-white">
              <span>FEATURED</span>
            </div>
          )}
        </div>
        <p className="text-base font-bold">{job.position}</p>
        <p className="text-sm text-dark-grayish-cyan">{job.postedAt}</p>
      </div>
    </div>
  );
};

// className="flex items-center rounded-full bg-desaturated-dark-cyan px-1 text-xs text-white"
