import { Link } from "react-router-dom";
import { ButtonType } from "src/types";
import { getThemeColor, getTextColor } from "src/utils/ui";

const Button: React.FC<ButtonType> = ({ theme, href, children, ...props }) => {
  const classes: string = props.disabled
    ? "px-5 py-2 rounded-md bg-slate-200 text-slate-400 shadow-lg"
    : `px-5 py-2 rounded-md ${getThemeColor(theme)} text-${getTextColor(
        theme
      )} shadow-lg active:scale-95 transition-all hover:shadow-xl`;

  const btn = (
    <button className={classes} {...props}>
      {children}
    </button>
  );
  return href ? <Link to={href}>{btn}</Link> : btn;
};

export default Button;
