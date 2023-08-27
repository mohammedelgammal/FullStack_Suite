import { useState } from "react";

// Utils
import { registerUser } from "services/users";

// Types
import FormFields from "types/FormFields";

// Styles
import Style from "./Register.module.css";

const Register: React.FC<{}> = (): React.ReactNode => {
  // Constants
  const intialFormData: FormFields = { username: "", email: "", password: "" };
  const [formData, setFormData] = useState<FormFields>(intialFormData);

  // Utils
  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await registerUser(formData);
  };

  return (
    <div className={Style.register}>
      <form onSubmit={(e) => submitHandler(e)}>
        <h2 className={Style.heading}>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="John Doe"
          name="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="john-doe@example.com"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
