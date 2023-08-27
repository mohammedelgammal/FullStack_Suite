// Libraries
import { RouterProvider } from "react-router-dom";

// Router
import router from "routing/routeConfig";

const App: React.FC<{}> = (): React.ReactNode => {
  return <RouterProvider router={router} />;
};
export default App;
