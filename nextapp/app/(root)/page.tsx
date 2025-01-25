"use client";

const Home = () => {
  console.log("rendered On the server once");

  return (
    <div className="text-center text-4xl">
      <h1>Hello World</h1>
      <button
        className="bg-zinc-900 text-white"
        onClick={() => console.log("rendered on the client!")}
      >
        click
      </button>
    </div>
  );
};

export default Home;
