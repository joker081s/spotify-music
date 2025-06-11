import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Music from "./pages/Music";
import Podcasts from "./pages/Podcasts";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Libraries from "./pages/Libraries";
import Premium from "./pages/Premium";
import Player from "./pages/Player";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { AuthProvider } from "./context/AuthContext";
import DisplayAlbum from "./pages/DisplayAlbum";

function App() {
  return (
    <>
      <div className="bg-[#111827] w-[100wh] h-[100vh] overflow-x-none overflow-y-auto text-white scrollbar scrollbar-thumb-transparent scrollbar-track-transparent">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="music" element={<Music />} />
              <Route path="podcasts" element={<Podcasts />} />
              <Route path="profile" element={<Profile />} />
              <Route path="search" element={<Search />} />
              <Route path="libraries" element={<Libraries />} />
              <Route path="premium" element={<Premium />} />
              <Route path="player" element={<Player />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="album/:id" element={<DisplayAlbum />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
