const RootLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <h1 className="text-3xl bg-red-500">Root Navbar</h1>
      {children}
      <h1 className="text-3xl bg-red-500">Root Footer</h1>
    </div>
  );
};

export default RootLayout;
