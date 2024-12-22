import { TagProps } from "src/types";

const Tag = ({ title }: TagProps) => {
  return (
    <div className="bg-blue-400 p-1 text-sm text-white rounded ">
      <span className="">{title}</span>
    </div>
  );
};

export default Tag;
