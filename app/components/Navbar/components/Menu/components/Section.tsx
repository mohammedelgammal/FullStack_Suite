const Section = ({ title, children }: SectionPropsType) => {
  return (
    <div className="container-start-v gap-3">
      <span className="text-2xl">{title}</span>
      {children}
    </div>
  );
};

type SectionPropsType = ChildrenPropType & {
  title: string;
};

export default Section;
