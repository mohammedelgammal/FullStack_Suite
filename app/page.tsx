import {
  Hero,
  Parallax,
  Achievements,
  Transformations,
  Testimonials,
  GetStarted,
  Services,
  About,
  SocialMedia,
} from "@/components";

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
      <Testimonials />
      <GetStarted />
      <Services />
      <About />
      <SocialMedia />
    </main>
  );
};

export default HomePage;
