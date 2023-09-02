// Libraries
import useFetch from "@mohammedelgammal/usefetch";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// Data
import inputProps from "data/registerInputProps";

// Types
import FormFields from "types/FormFieldsTypes";

// Icons
import { ReactComponent as LoadingIcon } from "assets/icons/loading_spinner.svg";
import { ReactComponent as ErrorIcon } from "assets/icons/error_triangle.svg";

// Styles
import Style from "./Register.module.css";

const Register: React.FC<{}> = (): React.ReactNode => {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormFields>();

  // Queries
  const { isLoading, error, data, executeQuery } = useFetch({
    url: import.meta.env.VITE_USERS_ENDPOINT,
    method: "POST",
    payload: {
      username: getValues("username"),
      email: getValues("email"),
      password: getValues("password"),
    },
    executeImmediately: false,
  });

  console.log("values are: ", getValues());

  // Handlers
  const onSubmit: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    // await executeQuery();
    console.log("values are: ", data);
    // reset();
  };

  return (
    <div className={Style.register}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          {...register("confirmPassword", {
            ...inputProps.confirmPassword,
            validate: (value: string): string | boolean =>
              value === getValues("password") ||
              "Passwords you entered do not match",
          })}
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
        />
        <span>{errors?.confirmPassword?.message?.toString()}</span>
        <button type="submit">
          {isLoading ? <LoadingIcon /> : "Register"}
        </button>
      </form>

      {error && (
        <div className={Style.apiSubmitError}>
          <ErrorIcon />
          <span>{error?.response?.data?.message}</span>
        </div>
      )}
      {data && <div className={Style.success}>{data?.message}</div>}
    </div>
  );
};

export default Register;
