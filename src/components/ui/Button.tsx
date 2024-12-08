import { ButtonEnum, ButtonProps } from "src/types/types";
import Style from "./Button.module.css";

const Button = ({ children, btnType, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${Style.button} ${
        btnType == ButtonEnum.Delete ? Style.delete : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
