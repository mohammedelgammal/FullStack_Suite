const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  throw Error("Error in Dashboar!");

  return (
    <div>
      <h1 className="text-3xl bg-zinc-600">Dashboard Navbar</h1>
      {children}
      <h1 className="text-3xl bg-zinc-600">Dashboard Footer</h1>
    </div>
  );
};

export default DashboardLayout;
