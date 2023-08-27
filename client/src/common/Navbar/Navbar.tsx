// Paths
import paths from "routing/routes";

// Libraries
import { Link } from "react-router-dom";

// Styles
import Style from "./Navbar.module.css";

const Navbar: React.FC<{}> = (): React.ReactNode => {
  return (
    <div className={Style.navbar}>
      <nav>
        <Link to={paths.auth.main}>Home</Link>
        <Link to={paths.auth.login}>Login</Link>
        <Link to={paths.auth.register}>Register</Link>
      </nav>
    </div>
  );
};

export default Navbar;
