import BottomBar from "../components/BottomBar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const [show, setShow] = useState(false);
  const { user, logout } = useAuth();
  function handleLogOut() {
    logout();
    setShow(false);
  }

  function handleShow() {
    if (!user) {
      return;
    }

    setShow((show) => !show);
  }
  return (
    <>
      <section className="w-full h-full bg-black text-white p-6 space-y-6 relative">
        <NavLink to={!user && "/login"} onClick={handleShow}>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-green-500 text-black w-12 h-12 flex items-center justify-center rounded-full uppercase text-xl font-bold">
              {user ? user.name.at(0) : "-"}
            </div>
            <div>
              <div className="text-lg font-bold">
                {user
                  ? user.name.toUpperCase().at(0) + user.name.slice(1)
                  : "Login"}
              </div>
              <div className="text-gray-400 text-sm">View profile</div>
            </div>
          </div>
        </NavLink>
        <hr className="border-gray-800 my-4" />

        {show && (
          <div className="">
            <div className="mx-5 px-8 space-y-3 py-6 rounded-lg bg-gray-800 font-semibold">
              <pre>
                Name : {user.name.toUpperCase().at(0) + user.name.slice(1)}
              </pre>
              <pre>Email : {user.email}</pre>
              <div className="flex justify-end">
                <button
                  className="px-4 py-1 bg-green-500 rounded-3xl hover:bg-white hover:text-black"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            </div>
            <hr className="border-gray-800 mb-4 mt-6" />
          </div>
        )}

        <div className="space-y-6 text-lg font-medium">
          <div className="flex items-center gap-3">
            <span>⚡</span>
            <span>What’s new</span>
          </div>
          <div className="flex items-center gap-3">
            <span>⏱️</span>
            <span>Recents</span>
          </div>
          <div className="flex items-center gap-3">
            <span>⚙️</span>
            <span>Settings and privacy</span>
          </div>
        </div>
      </section>
      <BottomBar />
    </>
  );
}

export default Profile;
