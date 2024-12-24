import { Note, OptionType, SetOptionsStateType } from "src/types";

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

export { getAvailableOptions, getAvailableNotes, handleCreateOption };
