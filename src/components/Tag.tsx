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
    <div className="m-1 rounded-md bg-desaturated-dark-cyan/10 px-2 hover:brightness-75">
      <button
        className="text-xs font-bold text-desaturated-dark-cyan"
        onClick={() => {
          setSelected(!selected);
          onClick(!selected);
        }}
      >
        {label}
      </button>
    </div>
  );
};
