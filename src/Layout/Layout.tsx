import { Outlet } from "react-router-dom";
import { Footer } from "src/Layout";

const Layout = () => (
  <div className="min-h-screen flex flex-col items-center">
    <div className="flex-1 w-full">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
