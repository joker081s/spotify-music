import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function TopBar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between px-4 pt-4 pb-2">
      <div className="flex items-center space-x-4">
        <NavLink
          to="/profile"
          className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg uppercase cursor-pointer select-none"
        >
          <p>{user ? user?.name.at(0) : "-"}</p>
        </NavLink>

        <nav className="flex space-x-3 bg-gray-800 rounded-full px-1 py-1 text-sm font-semibold select-none">
          <NavLink
            to="/"
            className="px-4 py-1 rounded-full hover:bg-gray-700 focus:outline-none"
          >
            <p>All</p>
          </NavLink>
          <NavLink
            to="/music"
            className="px-4 py-1 rounded-full hover:bg-gray-700 focus:outline-none"
          >
            <p>Music</p>
          </NavLink>
          <NavLink
            to="/podcasts"
            className="px-4 py-1 rounded-full hover:bg-gray-700 focus:outline-none"
          >
            <p>Podcasts</p>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
