import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes/routes";
import EntryPage from "./views/entry-page/EntryPage";
import PlayAndXbox from "./views/main-page/PlayAndXbox";
import PlayStation from "./views/main-page/PlayStation";
import Xbox from "./views/main-page/Xbox";
import SpecificGame from "./views/specific-game/SpecificGame";
import PostGame from "./views/post-a-game/PostGame";
import ValidateProtectedRoutes from "./components/ValidateProtectedRoutes";
import SignUp from "./views/sign-up/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/video-game-exchange" element={<EntryPage />} />
        <Route path={PublicRoutes.PLAYANDXBOX} element={<PlayAndXbox />} />
        <Route path={PublicRoutes.PLAYSTATION} element={<PlayStation />} />
        <Route path={PublicRoutes.XBOX} element={<Xbox />} />
        <Route
          path={`${PublicRoutes.SPECIFICGAME}/:idSpecificGame`}
          element={<SpecificGame />}
        />
        <Route path={PrivateRoutes.POSTGAME} element={
          <ValidateProtectedRoutes>
            <PostGame />
          </ValidateProtectedRoutes>
        } />
        <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
