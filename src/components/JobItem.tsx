import { Filter, JobListing } from '../App';
import { Tag, TagType } from './Tag';

interface JobItemProps {
  job: JobListing;
  updateFilter: React.Dispatch<React.SetStateAction<Filter[]>>;
}

export const JobItem = ({ job, updateFilter }: JobItemProps) => {
  const tagClicked = (type: TagType, name: string, selected: boolean) => {
    if (selected) {
      updateFilter((previous) => [...previous, { type, name }]);
    } else {
      updateFilter((previous) => previous.filter((tag) => tag.name != name));
    }
  };

  return (
    <div
      className={`flex w-4/5 rounded-md bg-white p-5 shadow-lg shadow-desaturated-dark-cyan/30 ${
        job.featured && 'border-l-4 border-very-dark-grayish-cyan'
      }`}
    >
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
        <div className="flex items-center">
          <p className="text-xs text-dark-grayish-cyan">{job.postedAt}</p>
          <div className="mx-3 h-1 w-1 rounded-full bg-dark-grayish-cyan" />
          <p className="text-xs text-dark-grayish-cyan">{job.contract}</p>
          <div className="mx-3 h-1 w-1 rounded-full bg-dark-grayish-cyan" />
          <p className="text-xs text-dark-grayish-cyan">{job.location}</p>
        </div>
      </div>
      <div className="m-2 flex flex-1 flex-wrap items-center justify-end">
        <Tag
          onClick={(selected) => tagClicked(TagType.Role, job.role, selected)}
          label={job.role}
        />
        <Tag
          onClick={(selected) => tagClicked(TagType.Level, job.level, selected)}
          label={job.level}
        />
        {job.languages.map((language) => (
          <Tag
            onClick={(selected) =>
              tagClicked(TagType.Language, language, selected)
            }
            label={language}
          />
        ))}
        {job.tools.map((tool) => (
          <Tag
            onClick={(selected) => tagClicked(TagType.Tool, tool, selected)}
            label={tool}
          />
        ))}
      </div>
    </div>
  );
};
