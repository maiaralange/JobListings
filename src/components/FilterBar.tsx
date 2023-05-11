import { Filter } from '../App';

interface FilterBarProps {
  filterItems: Filter[];
}

export const FilterBar = ({ filterItems }: FilterBarProps) => {
  return (
    <div className="flex justify-center">
      <div className="-mt-5 flex h-10 w-4/5 items-center rounded-md bg-white shadow-lg shadow-desaturated-dark-cyan/30">
        <div className="flex pl-5 text-sm text-dark-grayish-cyan">
          {filterItems.length
            ? filterItems.map((item) => <span>{item.name}</span>)
            : 'Click on the tags to filter!'}
        </div>
      </div>
    </div>
  );
};
