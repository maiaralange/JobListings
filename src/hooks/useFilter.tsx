import { ReactNode, createContext, useContext, useState } from 'react';
import { TagType } from '../components/Tag';

export interface Filter {
  name: string;
  type: TagType;
}

interface FilterContextData {
  filter: Filter[];
  addFilter: (name: string, type: TagType) => void;
  removeFilter: (name: string) => void;
}

interface FilterProviderProps {
  children: ReactNode;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState([] as Filter[]);

  function addFilter(name: string, type: TagType) {
    setFilter((previous) => [...previous, { type, name }]);
  }

  function removeFilter(name: string) {
    setFilter((previous) => previous.filter((tag) => tag.name != name));
  }

  return (
    <FilterContext.Provider value={{ filter, addFilter, removeFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  return context;
}
