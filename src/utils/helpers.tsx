import { OptionType } from "src/types";

const getAvailableOptions = (): OptionType[] => {
  const localOptions: string | null = localStorage.getItem("tags");
  if (!localOptions) return [];
  return JSON.parse(localOptions);
};

export { getAvailableOptions };
