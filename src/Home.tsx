import React from "react";
import type { User } from "firebase/auth";
import Lottie from "lottie-react";
import catAnimation from "./assets/shimeji-cat.json";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

interface HomeProps {
  openAuth: () => void;
  user: User | null;
}

export default function Home({ openAuth, user }: HomeProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white dark:bg-gray-900">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Fluffy Finds</h1>

      <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] mb-6">
        <Lottie animationData={catAnimation} loop autoplay />
      </div>

      {user ? (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Welcome, {user.displayName || user.email || "there"}!
          </h2>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border mb-2 object-cover"
            />
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 mb-4 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={openAuth}
          className="px-6 py-2 mb-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Login / Sign Up
        </button>
      )}

      <button
        onClick={() => navigate("/pets/dogs")}
        className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Explore
      </button>
    </div>
  );
}
