// Types
import { RegisterOptions } from "react-hook-form";

const requiredMsg = "This field cannot be left blank";

const inputProps = {
  username: {
    required: requiredMsg,
    maxLength: { value: 20, message: "Maximum 20 characters allowed" },
    minLength: {
      value: 5,
      message: "Minimum 5 characters allowed",
    },
  },
  email: {
    required: requiredMsg,
  },
  password: {
    required: requiredMsg,
  },
  verifyPassword: (passwordValue: string): RegisterOptions => ({
    // required: requiredMsg,
    validate: (value: string): boolean | string =>
      value === passwordValue || "The passwords you entered do not match",
  }),
};

export default inputProps;
