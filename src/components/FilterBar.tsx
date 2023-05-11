import removeImg from '../assets/icon-remove.svg';
import { useFilter } from '../hooks/useFilter';

export const FilterBar = () => {
  const { filter, removeFilter } = useFilter();
  return (
    <div className="flex justify-center">
      <div className="-mt-5 flex h-10 w-4/5 items-center rounded-md bg-white shadow-lg shadow-desaturated-dark-cyan/30">
        <div className="flex pl-5">
          {filter.length ? (
            filter.map((item, index) => (
              <div
                key={index}
                className="mr-2 flex justify-center rounded-md bg-desaturated-dark-cyan/10"
              >
                <span className="px-2 py-1 text-xs font-bold text-desaturated-dark-cyan">
                  {item.name}
                </span>
                <button
                  className="rounded-r-md bg-desaturated-dark-cyan px-2 hover:brightness-75 active:bg-very-dark-grayish-cyan"
                  onClick={() => removeFilter(item.name)}
                >
                  <img src={removeImg} className="h-2 w-2" />
                </button>
              </div>
            ))
          ) : (
            <span className="text-sm text-dark-grayish-cyan">
              Click on the tags to filter!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
