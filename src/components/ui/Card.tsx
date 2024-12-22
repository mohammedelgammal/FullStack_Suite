import { CardProps } from "src/types";
import { Tag } from "src/components";

const Card = ({ title, tags }: CardProps) => {
  return (
    <div className="flex flex-col w-80 p-5 rounded-lg gap-5 shadow-md border border-gray-200">
      <h5 className="flex items-center justify-center w-full text-center font-mono text-lg">
        {title}
      </h5>
      <div className="flex flex-wrap gap-3">
        <Tag title="tag1" />
      </div>
    </div>
  );
};

export default Card;
