import CreatableSelect from "react-select/creatable";
import { Card } from "src/common/ui";
import { Header } from "src/Layout";
import { getAvailableOptions, getAvailableNotes } from "src/utils/helpers";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col gap-10 px-7">
        <form className="flex-1">
          <div className="flex gap-8 mt-5">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input
                className="py-1.75 px-3 rounded border border-gray-300"
                name="title"
                type="text"
                placeholder="title"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="tags">Tags</label>
              <CreatableSelect
                className="min-w-96"
                name="tags"
                isMulti
                options={getAvailableOptions()}
                required
              />
            </div>
          </div>
        </form>
        <div className="flex flex-wrap gap-10">
          {getAvailableNotes().map((note, i) => (
            <Card
              key={i}
              to={`notes/${note.id}`}
              title={note.title}
              tags={note.options}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
