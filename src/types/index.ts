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
};

type CreateNoteFormType = {
  title: string;
  body: string;
};

type OptionType = {
  label: string;
  value: string;
};

type Note = CreateNoteFormType & { options: OptionType[] };

type TagProps = {
  title: string;
};

export type {
  ButtonType,
  CardProps,
  CreateNoteFormType,
  OptionType,
  Note,
  TagProps,
};
export { ThemeType };
