import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Creatable from "react-select/creatable";
import { Button } from "src/common/ui";
import {
  getAvailableNotes,
  getAvailableOptions,
  handleCreateOption,
} from "src/utils/helpers";
import { NoteFormData, OptionType, ThemeType } from "src/types";
import { MultiValue } from "react-select";

const EditNote = () => {
  const params = useParams();
  const navigate = useNavigate();

  const notes = getAvailableNotes();
  let note = notes.find((n) => n.id.toString() == params.id) ?? {
    id: 0,
    title: "",
    body: "",
    options: [],
  };

  const [options, setOptions] = useState<OptionType[]>(note.options);
  const [formData, setFormData] = useState<NoteFormData>(note);

  const handleEditNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (note of notes) {
      if (note.id.toString() == params.id) {
        note.title = formData.title;
        note.body = formData.body;
        note.options = options;
      }
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    navigate(-1);
  };

  const handleChangeSelect = (tags: MultiValue<OptionType>): void => {
    const newTags: OptionType[] = tags.map((tag) => ({
      label: tag.label,
      value: tag.value,
    }));
    setOptions(newTags);
  };

  return note ? (
    <div className="flex flex-col gap-5 p-6">
      <h1 className="text-slate-700 font-semibold font-serif text-3xl mb-5">
        New Note
      </h1>
      <form onSubmit={handleEditNote}>
        <div className="flex items-center mb-5 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input
              className="px-2 border border-gray-300 py-1.75 rounded"
              name="title"
              type="text"
              placeholder="Title..."
              required
              value={formData.title}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tags">Tags</label>
            <Creatable
              className="min-w-96"
              name="tags"
              isMulti
              options={getAvailableOptions()}
              required
              value={options}
              onCreateOption={(option) =>
                handleCreateOption(option, setOptions)
              }
              onChange={handleChangeSelect}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="body">Body</label>
          <textarea
            className="px-2 border border-gray-300 py-1.75 rounded"
            rows={10}
            name="body"
            placeholder="Body goes here..."
            required
            value={formData.body}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                body: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex gap-2 mt-5 justify-end">
          <Button type="submit" theme={ThemeType.PRIMARY}>
            Edit
          </Button>
          <Button href=".." type="button" theme={ThemeType.SECONDARY}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to={""} />
  );
};

export default EditNote;
