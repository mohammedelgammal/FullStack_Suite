// Libraries
import useFetch from "@mohammedelgammal/usefetch";
import { useForm } from "react-hook-form";

// Data
import inputProps from "data/registerInputProps";

// Types
import FormFields from "types/FormFieldsTypes";

// Icons
import { ReactComponent as LoadingIcon } from "assets/icons/loading_spinner.svg";

// Styles
import Style from "./Register.module.css";

const Register: React.FC<{}> = (): React.ReactNode => {
  // Constants
  const defaultFormValues = {
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  };

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormFields>({
    defaultValues: defaultFormValues,
  });

  // Queries
  const { isLoading, error, data, executeQuery } = useFetch({
    url: import.meta.env.VITE_USERS_ENDPOINT,
    method: "POST",
    payload: getValues(),
    executeImmediately: false,
  });

  return (
    <div className={Style.register}>
      <form onSubmit={handleSubmit(executeQuery)}>
        <h2 className={Style.heading}>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          {...register("username", inputProps.username)}
          type="text"
          placeholder="John Doe"
          name="username"
        />
        <span>{errors?.username?.message?.toString()}</span>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", inputProps.email)}
          type="email"
          placeholder="john-doe@example.com"
          name="email"
        />
        <span>{errors?.email?.message?.toString()}</span>
        <label htmlFor="password">Password</label>
        <input
          {...register("password", inputProps.password)}
          type="password"
          placeholder="Password"
          name="password"
        />
        <span>{errors?.password?.message?.toString()}</span>
        <label htmlFor="verify_password">Verify Password</label>
        <input
          {...register(
            "verifyPassword",
            inputProps.verifyPassword(getValues("password"))
          )}
          type="password"
          placeholder="Verify password"
          name="verify_password"
        />
        <span>{errors?.verifyPassword?.message?.toString()}</span>
        <button type="submit">
          <LoadingIcon />
        </button>
      </form>
    </div>
  );
};

export default Register;
