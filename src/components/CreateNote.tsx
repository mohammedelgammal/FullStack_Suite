import Creatable from "react-select/creatable";
import { OptionsType } from "src/types";

const options: OptionsType = [];

const CrateNote = () => {
  return (
    <div>
      <h1>New Note</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" />
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <Creatable name="tags" isMulti options={options} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" />
        </div>
      </form>
    </div>
  );
};

export default CrateNote;
