import { Outlet } from "react-router-dom";
import { Header, Footer } from "src/Layout";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
