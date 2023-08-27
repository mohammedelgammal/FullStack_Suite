// Libraries
import axios, { AxiosResponse } from "axios";

// Types
import FormFields from "types/FormFields";

const registerUser = async (userData: FormFields): Promise<AxiosResponse> => {
  const response = await axios.post(import.meta.env.USERS_API_URL, userData);
  return response;
};

export { registerUser };
