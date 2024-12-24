import { Link } from "react-router-dom";
import { Tag } from "src/common/ui";
import { CardProps } from "src/types";

const Card = ({ title, tags, to }: CardProps) => {
  return (
    <Link to={to}>
      <div className="flex flex-col w-80 p-5 rounded-lg gap-5 shadow-md border border-gray-200">
        <h5 className="flex items-center justify-center w-full text-center font-mono text-lg">
          {title}
        </h5>
        <div className="flex flex-wrap gap-3">
          {tags.map(({ label }, i) => (
            <Tag key={i} title={label} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
