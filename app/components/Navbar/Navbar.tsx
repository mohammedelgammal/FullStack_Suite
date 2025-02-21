import { Logo, ScrollContainer } from "@/common/components";

const Navbar = () => {
  return (
    <ScrollContainer className="flex justify-start items-center absolute top-0 left-0 right-0 h-24 px-6">
      <Logo />
    </ScrollContainer>
  );
};

export default Navbar;
