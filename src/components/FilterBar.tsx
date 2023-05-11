import removeImg from '../assets/icon-remove.svg';
import { useFilter } from '../hooks/useFilter';

export const FilterBar = () => {
  const { filter } = useFilter();
  return (
    <div className="flex justify-center">
      <div className="-mt-5 flex h-10 w-4/5 items-center rounded-md bg-white shadow-lg shadow-desaturated-dark-cyan/30">
        <div className="flex pl-5">
          {filter.length ? (
            filter.map((item, index) => (
              <div
                key={index}
                className="mr-2 flex items-center justify-center rounded-md bg-desaturated-dark-cyan/10 px-2 py-1"
              >
                <span className="text-xs font-bold text-desaturated-dark-cyan">
                  {item.name}
                </span>
                <button className="bg-desaturated-dark-cyan">
                  <img src={removeImg} />
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
