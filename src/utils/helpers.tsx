import { Note, OptionType } from "src/types";

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

export { getAvailableOptions, getAvailableNotes };
