import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// Libraries
// import useFetch from "@mohammedelgammal/usefetch";

// Styles
import Style from "./Register.module.css";

const Register: React.FC<{}> = (): React.ReactNode => {
  // Constants
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Queries
  // const { isLoading, error, data, executeQuery } = useFetch({
  //   url: import.meta.env.VITE_USERS_ENDPOINT,
  //   method: "POST",
  //   payload: formData,
  //   executeImmediately: false,
  // });

  const onSubmit: SubmitHandler<FieldValues> = (data): void => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className={Style.register}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={Style.heading}>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          {...register("username", {
            required: "This field cannot be left blank",
            maxLength: { value: 20, message: "Maximum 20 characters allowed!" },
          })}
          type="text"
          placeholder="John Doe"
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "This field cannot be left blank",
          })}
          type="email"
          placeholder="john-doe@example.com"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: "This field cannot be left blank",
            maxLength: {
              value: 20,
              message: "Maximum length 20 characters allowed!",
            },
          })}
          type="password"
          placeholder="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
      <div className={Style.errors}>
        <span>{errors?.username?.message?.toString()}</span>
      </div>
    </div>
  );
};

export default Register;
