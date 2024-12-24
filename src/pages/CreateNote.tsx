import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Creatable from "react-select/creatable";
import { Button } from "src/common/ui";
import { getAvailableOptions, handleCreateOption } from "src/utils/helpers";
import { Note, NoteFormData, OptionType, ThemeType } from "src/types";
import { MultiValue } from "react-select";

const initialFormData: NoteFormData = {
  id: 0,
  title: "",
  body: "",
};

const CrateNote = () => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [formData, setFormData] = useState<NoteFormData>(initialFormData);

  const navigate = useNavigate();

  const handleCreateNote = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const getCurrentNotes: () => Note[] = (): Note[] => {
      const currentNotes: string | null = localStorage.getItem("notes");
      if (currentNotes) return JSON.parse(currentNotes);
      return [];
    };
    const notes: Note[] = getCurrentNotes();

    const newNote: Note = {
      id: notes.length + 1,
      title: formData.title,
      body: formData.body,
      options,
    };

    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));

    setFormData(initialFormData);
    setOptions([]);

    navigate(-1);
  };

  const handleChangeSelect = (tags: MultiValue<OptionType>): void => {
    const newTags: OptionType[] = tags.map((tag) => ({
      label: tag.label,
      value: tag.value,
    }));
    setOptions(newTags);
  };

  return (
    <div className="flex flex-col gap-5 p-6">
      <h1 className="text-slate-700 font-semibold font-serif text-3xl mb-5">
        New Note
      </h1>
      <form onSubmit={handleCreateNote}>
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
            Save
          </Button>
          <Button href=".." type="button" theme={ThemeType.SECONDARY}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CrateNote;
