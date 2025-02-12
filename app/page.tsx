import Form from "next/form";
import { FormResetButton } from "@/components";

type HomeProps = {
  searchParams: Promise<{
    query: string | undefined;
  }>;
};

const Home = async ({ searchParams }: HomeProps) => {
  const { query } = await searchParams;

  return (
    <div>
      <span>{query}</span>
      <Form action="" id="search-form">
        <input name="query" type="text" placeholder="Search" />
        <br />
        <FormResetButton />
        <br />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};

export default Home;
