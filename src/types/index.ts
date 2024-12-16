type OptionType = { value: string; label: string };
type OptionsType = Array<OptionType>;

enum ThemeType {
  PRIMARY,
  SECONDARY,
  DELETE,
  DISABLED,
}

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeType;
  children?: React.JSX.Element | string;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>[];
}

export type { OptionType, OptionsType, ButtonType };
export { ThemeType };
