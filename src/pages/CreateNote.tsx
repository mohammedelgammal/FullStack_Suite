import { useState } from "react";
import { Link } from "react-router-dom";
import Creatable from "react-select/creatable";
import { Button } from "src/common/ui";
import { CreateNoteFormType, ThemeType } from "src/types";

const CrateNote = () => {
  type OptionType = {
    label: string;
    value: string;
  };

  type Note = {
    title: string;
    body: string;
    options: OptionType[];
  };

  const [options, setOptions] = useState<OptionType[]>([]);
  const [formData, setFormData] = useState<CreateNoteFormType>({
    title: "",
    body: "",
  });

  const handleCreateNote = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const getCurrentNotes: () => Note[] = (): Note[] => {
      const currentNotes: string | null = localStorage.getItem("notes");
      if (currentNotes) return JSON.parse(currentNotes);
      return [];
    };
    const notes: Note[] = getCurrentNotes();
    const newNote: Note = {
      title: formData.title,
      body: formData.body,
      options,
    };

    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
    if (notes) {
      console.log(JSON.stringify(localStorage!.getItem("notes")));
    }
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
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  title: e.target!.value,
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
              options={options}
              required
              onChange={(tags) =>
                setOptions(
                  tags.map((tag) => ({
                    label: tag.label,
                    value: tag.value,
                  }))
                )
              }
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
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                body: e.target!.value,
              }))
            }
          />
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
