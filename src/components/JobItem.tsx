import { JobListing } from '../App';
import { useFilter } from '../hooks/useFilter';
import { Tag, TagType } from './Tag';

interface JobItemProps {
  job: JobListing;
}

export const JobItem = ({ job }: JobItemProps) => {
  const { addFilter, removeFilter } = useFilter();

  const tagClicked = (type: TagType, name: string, selected: boolean) => {
    if (selected) {
      addFilter(name, type);
    } else {
      removeFilter(name);
    }
  };

  return (
    <div
      className={`m-2 flex w-4/5 flex-col rounded-md bg-white p-5 shadow-lg shadow-desaturated-dark-cyan/30 md:m-0 md:flex-row ${
        job.featured && 'border-l-4 border-very-dark-grayish-cyan'
      }`}
    >
      <img
        src={job.logo}
        className="-mt-12 h-16 w-16 object-contain pr-5 md:m-0 md:h-24 md:w-24"
      />
      <div className="flex flex-col justify-between gap-2 py-0 md:gap-0 md:py-3">
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
        <p className="text-sm font-bold md:text-base">{job.position}</p>
        <div className="flex items-center">
          <p className="text-xs text-dark-grayish-cyan">{job.postedAt}</p>
          <div className="mx-3 h-1 w-1 rounded-full bg-dark-grayish-cyan" />
          <p className="text-xs text-dark-grayish-cyan">{job.contract}</p>
          <div className="mx-3 h-1 w-1 rounded-full bg-dark-grayish-cyan" />
          <p className="text-xs text-dark-grayish-cyan">{job.location}</p>
        </div>
      </div>
      <div className="my-4 h-[1px] w-full rounded-full bg-dark-grayish-cyan/30 md:hidden"></div>
      <div className="flex flex-1 flex-wrap items-center md:m-2 md:justify-end">
        <Tag
          onClick={(selected) => tagClicked(TagType.Role, job.role, selected)}
          label={job.role}
        />
        <Tag
          onClick={(selected) => tagClicked(TagType.Level, job.level, selected)}
          label={job.level}
        />
        {job.languages.map((language, index) => (
          <Tag
            key={index}
            onClick={(selected) =>
              tagClicked(TagType.Language, language, selected)
            }
            label={language}
          />
        ))}
        {job.tools.map((tool, index) => (
          <Tag
            key={index}
            onClick={(selected) => tagClicked(TagType.Tool, tool, selected)}
            label={tool}
          />
        ))}
      </div>
    </div>
  );
};
