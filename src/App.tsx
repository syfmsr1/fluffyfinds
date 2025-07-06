import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import type { User } from "firebase/auth";
import { AnimatePresence } from "framer-motion";

import Home from "./Home";
import PetsBreed from "./PetsBreed";
import AuthModal from "./AuthModel";

interface AppProps {
  user: User | null;
}

export default function App({ user }: AppProps) {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleAuthOpen = () => setShowModal(true);
  const handleAuthClose = () => setShowModal(false);

  return (
    <>
      {/* Animate route changes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home openAuth={handleAuthOpen} user={user} />}
          />
          <Route
            path="/pets/:type"
            element={<PetsBreed user={user} />}
          />
        </Routes>
      </AnimatePresence>

      {/* Login modal */}
      <AuthModal show={showModal} onClose={handleAuthClose} />
    </>
  );
}
