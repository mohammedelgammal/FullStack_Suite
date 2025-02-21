import { Hero, Parallax, Achievements, Transformations } from "@/components";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <section>
        <Parallax direction="left" duration={30} variant="secondary" />
        <Parallax direction="right" duration={30} variant="primary" />
      </section>
      <Achievements />
      <Transformations />
    </main>
  );
};

export default HomePage;
