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
import Login from "./views/login/Login";
import UserProvider from "./contexts/User";
import PostsProvider from "./contexts/Posts";
import Dashboard from "./views/dashboard/Dashboard";

function App() {
  return (
    <UserProvider>
      <PostsProvider>
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
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </UserProvider>
  );
}

export default App;
