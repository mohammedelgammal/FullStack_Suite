import { signIn } from "@/auth";

const Signin = () => {
  const handleSignin: () => void = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <form action={handleSignin}>
      <button
        type="submit"
        className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Login
      </button>
    </form>
  );
};

export default Signin;
