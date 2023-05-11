import { useEffect, useState } from 'react';
import { useFilter } from '../hooks/useFilter';

interface TagProps {
  label: string;
  onClick: (selected: boolean) => void;
}

export enum TagType {
  Role,
  Level,
  Language,
  Tool
}

export const Tag = ({ label, onClick }: TagProps) => {
  const { filter } = useFilter();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(Boolean(filter.find((tag) => tag.name == label)));
  }, [filter]);

  return (
    <button
      className={`m-1 rounded-md px-2 py-1 text-xs font-bold hover:brightness-75 active:bg-very-dark-grayish-cyan ${
        selected
          ? 'bg-desaturated-dark-cyan text-white'
          : 'bg-desaturated-dark-cyan/10 text-desaturated-dark-cyan'
      }`}
      onClick={() => {
        onClick(!selected);
        setSelected(!selected);
      }}
    >
      {label}
    </button>
  );
};
