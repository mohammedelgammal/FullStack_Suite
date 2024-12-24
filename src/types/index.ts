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
  tags: OptionType[];
  to: string;
};

type OptionType = {
  label: string;
  value: string;
};

type NoteFormData = {
  id: number;
  title: string;
  body: string;
};

type Note = NoteFormData & {
  options: OptionType[];
};

type TagProps = {
  title: string;
};

export type { ButtonType, CardProps, OptionType, Note, TagProps, NoteFormData };
export { ThemeType };
