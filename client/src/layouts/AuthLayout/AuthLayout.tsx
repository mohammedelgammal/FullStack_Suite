// Components
import { Navbar } from "common";

// Libraries
import { Outlet } from "react-router-dom";

// Styles
import Style from "./AuthLayout.module.css";

const AuthLayout: React.FC<{}> = (): React.ReactNode => {
  return (
    <div className={Style.authLayout}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
