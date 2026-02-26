import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function Layout() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      // Clear the state so it doesn't scroll again on refresh
      navigate(location.pathname, { replace: true, state: {} });
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Navbar openContactModal={() => setIsContactModalOpen(true)} />
      <main className="flex-grow">
        <Outlet context={{ openContactModal: () => setIsContactModalOpen(true) }} />
      </main>
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
