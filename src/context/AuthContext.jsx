import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(function () {
    const data = JSON.parse(localStorage.getItem("user"));
    setLoading(false);
    return data;
  });
  const [playlist, setPlaylist] = useState(function () {
    if (!user) {
      return [];
    }
    return JSON.parse(localStorage.getItem(user.email));
  });

  useEffect(() => {
    if (!user) {
      return;
    }
    if (playlist.length === 0) {
      setPlaylist((playlist) => [
        ...playlist,
        { name: "Liked Songs", songs: [] },
      ]);
    }
    localStorage.setItem(user.email, JSON.stringify(playlist));
  }, [playlist, user]);

  const login = (userData) => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const foundUser = registeredUsers.find(
      (u) => u.email === userData.email && u.password === userData.password
    );

    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    const userWithoutPassword = { ...foundUser };
    delete userWithoutPassword.password;

    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));

    if (JSON.parse(localStorage.getItem(user.email))) {
      return;
    }

    localStorage.setItem(
      userData.email,
      JSON.stringify([
        {
          name: "Liked Songs",
          songs: [],
        },
      ])
    );
  };

  const register = async (userData) => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    if (registeredUsers.some((user) => user.email === userData.email)) {
      throw new Error("Email already registered");
    }

    const newUser = {
      ...userData,
      id: Date.now(),
    };

    registeredUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;

    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));

    localStorage.setItem(
      userData.email,
      JSON.stringify([
        {
          name: "Liked Songs",
          songs: [],
        },
      ])
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const alreadyLogged = () => {
    setLoading(true);
    if (user) {
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const createPlayList = (playlistName) => {
    setLoading(true);
    setPlaylist((playlist) => [...playlist, { name: playlistName, songs: [] }]);
    setLoading(false);
  };

  const addSongToPlaylist = (playListName, song) => {
    setPlaylist((playlist) =>
      playlist.map((obj) => {
        if (obj.name === playListName) {
          const alreadyExists = obj.songs.some((track) => track.id === song.id);

          if (!alreadyExists) {
            return { ...obj, songs: [...obj.songs, song] };
          }
        }

        return obj;
      })
    );
  };

  const removeSongFromPlaylist = (playListName, song) => {
    setPlaylist((playlist) =>
      playlist.map((obj) => {
        if (obj.name === playListName) {
          const updatedSongs = obj.songs.filter(
            (track) => track.id !== song.id
          );
          return { ...obj, songs: updatedSongs };
        }

        return obj;
      })
    );
  };

  const handleRemoveSongPlaylist = (playListName) => {
    setPlaylist((playlist) =>
      playlist.filter((obj) => obj.name !== playListName)
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        alreadyLogged,
        createPlayList,
        playlist,
        addSongToPlaylist,
        removeSongFromPlaylist,
        handleRemoveSongPlaylist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
