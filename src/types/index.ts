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
  href?: string;
}

type CardProps = {
  title: string;
  tags?: string[];
};

type TagProps = {
  title: string;
};

export type { OptionType, OptionsType, ButtonType, CardProps, TagProps };
export { ThemeType };
