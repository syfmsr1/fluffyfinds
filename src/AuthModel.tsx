import { Modal, Button } from "react-bootstrap";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function AuthModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      // Optional: Show toast here if you have react-toastify
      onClose();
    } catch (err) {
      alert("Google Sign-in Failed");
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered animation>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Fluffy Finds</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        <Button
          variant="danger"
          onClick={signInWithGoogle}
          className="mb-3 w-100 fw-bold"
        >
          <i className="bi bi-google me-2"></i>
          Sign in with Google
        </Button>
      </Modal.Body>
    </Modal>
  );
}
