import { FiltersType, Note, OptionType, SetOptionsStateType } from "src/types";

const getAvailableOptions = (): OptionType[] => {
  const localOptions: string | null = localStorage.getItem("tags");
  if (!localOptions) return [];
  return JSON.parse(localOptions);
};

const getAvailableNotes = (): Note[] => {
  const localNotes = localStorage.getItem("notes");
  if (!localNotes) return [];
  const notes = JSON.parse(localNotes);
  return notes;
};

const handleCreateOption = (
  option: string,
  setOptions: SetOptionsStateType
): void => {
  const newOption: OptionType = { label: option, value: option };
  const localOptions: string | null = localStorage.getItem("tags");
  if (!localOptions)
    return localStorage.setItem("tags", JSON.stringify([newOption]));
  const options: OptionType[] = JSON.parse(localOptions);
  for (let opt of options) if (opt.label == option) return;
  localStorage.setItem("tags", JSON.stringify([...options, newOption]));
  setOptions((prevOptions) => [...prevOptions, newOption]);
};

const filterNotes = (localNotes: Note[], filter: FiltersType): Note[] => {
  return localNotes.filter((note) => {
    return (
      ((!filter.title || note.title.includes(filter.title)) &&
        !filter.options.length) ||
      ((): boolean => {
        for (const filterOption of filter.options) {
          for (const noteOption of note.options) {
            if (noteOption.label === filterOption.label) return true;
          }
        }
        return false;
      })()
    );
  });
};

export {
  getAvailableOptions,
  getAvailableNotes,
  handleCreateOption,
  filterNotes,
};
