import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import EntryPage from "./views/entry-page/EntryPage";
import PlayAndXbox from "./views/main-page/PlayAndXbox";
import PlayStation from "./views/main-page/PlayStation";
import Xbox from "./views/main-page/Xbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path={routes.PLAYANDXBOX} element={<PlayAndXbox />} />
        <Route path={routes.PLAYSTATION} element={<PlayStation />} />
        <Route path={routes.XBOX} element={<Xbox />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
