import { NavLink } from "react-router-dom";
import type { User } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

interface SidebarProps {
  user: User | null;
}

export default function Sidebar({ user }: SidebarProps) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="d-flex flex-column p-3 bg-light border-end vh-100" style={{ width: "250px" }}>
      {/* User Info */}
      {user && (
        <div className="text-center mb-4">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Avatar"
              className="rounded-circle mb-2"
              width={64}
              height={64}
              style={{ objectFit: "cover" }}
            />
          )}
          <div className="fw-bold">{user.displayName || user.email}</div>
          <button
            className="btn btn-outline-danger btn-sm mt-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="nav flex-column">
        <NavLink to="/" className="nav-link text-dark">
          🏠 Home
        </NavLink>
        <NavLink to="/pets/cats" className="nav-link text-dark">
          🐱 Cats
        </NavLink>
        <NavLink to="/pets/birds" className="nav-link text-dark">
          🐦 Birds
        </NavLink>
        <NavLink to="/pets/dogs" className="nav-link text-dark">
          🐶 Dogs
        </NavLink>
        <hr />
        <NavLink to="/contact" className="nav-link text-dark">
          📞 Contact Us
        </NavLink>
        <NavLink to="/doctor" className="nav-link text-dark">
          🩺 Contact Our Doctor
        </NavLink>
      </nav>
    </div>
  );
}
