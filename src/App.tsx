import { Route, Routes } from "react-router-dom";
import { Layout } from "src/Layout";
import { Home, CreateNote, ShowNote, EditNote, ErrorPage } from "src/pages";
import Tags from "./pages/Tags";

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
        <Route path="tags" element={<Tags />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
