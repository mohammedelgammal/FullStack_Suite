import { Route, Routes } from "react-router-dom";
import { Layout } from "src/Layout";
import {
  Home,
  CreateNote,
  ShowNote,
  EditNote,
  ErrorPage,
} from "src/components";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new" element={<CreateNote />} />
        <Route path="notes/:id">
          <Route index element={<ShowNote />} />
          <Route path="edit" element={<EditNote />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
