import { signIn } from "@/auth";

const handleGithubSignin = async () => {
  "use server";
  await signIn("github");
};

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl">This is Homepage</h1>
      <form action={handleGithubSignin}>
        <button className="bg-violet-900 p-3 text-white  rounded" type="submit">
          GitHub SignIn
        </button>
      </form>
    </div>
  );
};

export default Home;
