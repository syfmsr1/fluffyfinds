import { useLocation,  } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoute({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Animate only the route-level element */}
      <div key={location.pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
}
