const Forhead = ({
  meta,
  title,
  icon,
  variant,
  children,
}: ForeheadPropsType) => {
  const containerJustify =
    variant == "center"
      ? "container-center-v text-center"
      : "container-start-v";

  return (
    <div className={`${containerJustify} max-w-screen p-6 text-4xl mb-10`}>
      <div className={`${containerJustify}`}>
        <div className="container-center gap-1 text-secondary text-lg mb-4">
          {icon}
          {meta}
        </div>
        <h1 className="text-white text-6xl max-lg:text-6xl max-md:text-5xl tracking-wide">
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
};

type ForeheadPropsType = {
  meta: string;
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  variant: "start" | "center";
};

export default Forhead;
