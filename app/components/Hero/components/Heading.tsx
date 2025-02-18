import Style from "./Heading.module.css";

const Heading = () => {
  return (
    <h1
      className={`${Style.heading} text-7xl mb-10 max-lg:text-6xl max-md:text-5xl tracking-wide`}
    >
      <span className={Style.fadeIn}>
        Gain Strength, <br />
      </span>
      <span className={Style.fadeIn}>
        Shed Weight, <br />
      </span>
      <span className={Style.fadeIn}>Unleash Confidence</span>
    </h1>
  );
};

export default Heading;
