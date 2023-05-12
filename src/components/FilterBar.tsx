import { useFilter } from '../hooks/useFilter';
import removeImg from '/assets/icon-remove.svg';

export const FilterBar = () => {
  const { filter, removeFilter, clear } = useFilter();
  return (
    <div className="flex justify-center">
      <div className="-mt-6 flex h-auto min-h-[3rem] w-4/5 items-center rounded-md bg-white px-5 py-2 shadow-lg shadow-desaturated-dark-cyan/30">
        <div className="flex w-full justify-between">
          {filter.length ? (
            <div className="flex flex-wrap">
              {filter.map((item, index) => (
                <div
                  key={index}
                  className="m-1 mr-2 flex justify-center rounded-md bg-desaturated-dark-cyan/10"
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
              ))}
            </div>
          ) : (
            <span className=" text-sm text-dark-grayish-cyan">
              Click on the tags to filter!
            </span>
          )}
          <button
            className={`text-sm font-bold text-desaturated-dark-cyan hover:brightness-75 active:underline ${
              !filter.length && 'hidden'
            }`}
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
