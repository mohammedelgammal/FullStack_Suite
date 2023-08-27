// Libraries
import axios, { AxiosResponse } from "axios";

// Types
import FormFields from "types/FormFields";

const registerUser = async (userData: FormFields): Promise<AxiosResponse> => {
  console.log("returned response:", import.meta.env.VITE_USERS_ENDPOINT);
  return await axios.post(import.meta.env.VITE_USERS_ENDPOINT, userData);
};

export { registerUser };
