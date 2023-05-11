interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => {
  return (
    <div className="m-1 rounded-md bg-desaturated-dark-cyan/10 p-1">
      <p className="text-xs font-bold text-desaturated-dark-cyan">{label}</p>
    </div>
  );
};
