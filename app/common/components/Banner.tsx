import { Button } from "@/common/components";

const Banner = ({ title, cta }: BannerPropsType) => {
  return (
    <div className="container-center-v gap-10 bg-primary p-8 w-full">
      <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl text-center">
        {title}
      </h1>
      <Button variant="dark">{cta}</Button>
    </div>
  );
};

// types definitions start here

type BannerPropsType = {
  title: string | React.ReactNode;
  cta: string;
};

export default Banner;
