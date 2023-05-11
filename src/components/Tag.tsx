import { useState } from 'react';

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
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={`m-1 rounded-md px-2 py-1 text-xs font-bold hover:brightness-75 ${
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
