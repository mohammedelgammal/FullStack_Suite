import { Banner } from "@/common/components";

const GetStarted = () => {
  return (
    <div className="container-center bg-dark py-10 px-6">
      <Banner
        title={
          <span>
            Transform your fitness—book now and <br /> start your journey to a
            stronger, healthier you!
          </span>
        }
        cta="Get Started Now!"
      />
    </div>
  );
};

export default GetStarted;
