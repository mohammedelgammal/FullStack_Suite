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

type CreateNoteFormType = {
  title: string;
  body: string;
};

export type { ButtonType, CardProps, CreateNoteFormType };
export { ThemeType };
