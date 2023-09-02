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
  confirmPassword: {
    required: requiredMsg,
  },
};

export default inputProps;
