import CreatableSelect from "react-select/creatable";

const Home = () => {
  // replace with stored tags
  const options: string[] = [];

  return (
    <div className="flex-1">
      <form className="flex-1">
        <div className="flex gap-8 px-7 mt-5">
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
              options={options}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
