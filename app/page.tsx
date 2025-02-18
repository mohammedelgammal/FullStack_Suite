import { Hero, Parallax } from "@/components";

const HomePage = () => {
  return (
    <main style={{ height: "200vh" }}>
      <Hero />
      <section>
        <Parallax direction="left" duration={30} variant="secondary" />
        <Parallax direction="right" duration={30} variant="primary" />
      </section>
    </main>
  );
};

export default HomePage;
