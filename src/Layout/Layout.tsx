import { Outlet } from "react-router-dom";
import { Header, Footer } from "src/Layout";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
