import Creatable from "react-select/creatable";
import { OptionsType, ThemeType } from "src/types";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const options: OptionsType = [];

const CrateNote = () => {
  const handleCreateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-slate-700 font-semibold font-serif text-3xl mt-10 mb-5">
        New Note
      </h1>
      <form onSubmit={handleCreateNote}>
        <div className="flex items-center mb-5 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input className="p-1" name="title" type="text" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tags">Tags</label>
            <Creatable
              className="min-w-96"
              name="tags"
              isMulti
              options={options}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="body">Body</label>
          <textarea rows={10} name="body" required />
        </div>
        <div className="flex gap-2 mt-5 justify-end">
          <Button type="submit" theme={ThemeType.PRIMARY}>
            Save
          </Button>
          <Link to="..">
            <Button type="button" theme={ThemeType.SECONDARY}>
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CrateNote;
