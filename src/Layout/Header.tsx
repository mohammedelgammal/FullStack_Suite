import Button from "src/components/ui/Button";
import { ThemeType } from "src/types";

const Header = () => {
  return (
    <div className="flex justify-between px-7 items-center h-20 w-full bg-slate-700">
      <h3 className="text-2xl text-white font-serif">Note Taking App</h3>
      <div className="flex gap-3">
        <Button href="/new" theme={ThemeType.PRIMARY}>
          Create Note
        </Button>
        <Button theme={ThemeType.SECONDARY}>Edit Tags</Button>
      </div>
    </div>
  );
};

export default Header;
