// Libraries
import axios from "axios";

// Types
import FormFields from "types/FormFieldsTypes";

const registerUser = async (userData: FormFields): Promise<void> => {
  const response = await axios
    .post(import.meta.env.VITE_USERS_ENDPOINT, userData)
    .then(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  return response;
};

export { registerUser };
