import { ThemeType } from "src/types";

const getThemeColor = (theme: ThemeType): string =>
  theme == ThemeType.PRIMARY
    ? "bg-blue-500"
    : theme == ThemeType.DELETE
    ? "bg-red-700"
    : "";

const getTextColor = (theme: ThemeType): string =>
  theme == ThemeType.PRIMARY || theme == ThemeType.DELETE
    ? "white"
    : "slate-700";

export { getThemeColor, getTextColor };
