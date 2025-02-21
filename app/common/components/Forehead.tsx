const Forhead = ({ meta, title, icon }: ForeheadPropsType) => {
  return (
    <div className="container-start max-w-screen p-6 text-4xl">
      <div className="container-start-v">
        <div className="container-center gap-1 text-secondary text-lg mb-4">
          {icon}
          {meta}
        </div>
        <h1 className="text-white text-6xl mb-10 max-lg:text-6xl max-md:text-5xl tracking-wide">
          {title}
        </h1>
      </div>
    </div>
  );
};

type ForeheadPropsType = {
  meta: string;
  title: string;
  icon: React.ReactNode;
};

export default Forhead;
