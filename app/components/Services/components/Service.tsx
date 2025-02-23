const Service = ({ title, src }: ServicePropsType) => {
  return (
    <div className="relative flex justify-between items-end p-6 h-96 max-lg:h-[250px] max-md:h-[200px] border border-disabled hover:border-primary ease-linear duration-100 overflow-hidden">
      <div
        className="z-1 absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-125"
        style={{ backgroundImage: `url("${src}")` }}
      />
      <span className="z-2 text-white text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {title}
      </span>
    </div>
  );
};

// type definitions start here

type ServicePropsType = { title: string; src: string };

export default Service;
