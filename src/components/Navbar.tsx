import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  openContactModal: () => void;
}

export default function Navbar({ openContactModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-slate-900 tracking-tighter">
                Nonacrypt
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a
                href={isHome ? "#what-we-do" : "/#what-we-do"}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-orange-600 transition-colors"
              >
                What we do
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a
                  href={isHome ? "#services" : "/#services"}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors h-full"
                >
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </a>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 shadow-lg rounded-xl py-2 mt-0">
                    <Link to="/services/data-analytics" className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">Data & Analytics</Link>
                    <Link to="/services/data-science" className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">Data Science</Link>
                    <Link to="/services/ai-development" className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">AI Development</Link>
                    <Link to="/services/devops" className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">Cloud & DevOps</Link>
                  </div>
                )}
              </div>

              <Link
                to="/industries"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-orange-600 transition-colors"
              >
                Industries <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <a
                href={isHome ? "#about-us" : "/#about-us"}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-500 hover:text-orange-600 transition-colors"
              >
                About
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer"
            >
              Contact us
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href={isHome ? "#what-we-do" : "/#what-we-do"}
              onClick={() => setIsOpen(false)}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300"
            >
              What we do
            </a>
            
            <div className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-orange-700 bg-orange-50">
              <div className="flex justify-between items-center" onClick={() => setIsServicesOpen(!isServicesOpen)}>
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>
              {isServicesOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-orange-200">
                  <Link to="/services/data-analytics" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-700 hover:text-orange-600">Data & Analytics</Link>
                  <Link to="/services/data-science" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-700 hover:text-orange-600">Data Science</Link>
                  <Link to="/services/ai-development" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-700 hover:text-orange-600">AI Development</Link>
                  <Link to="/services/devops" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-700 hover:text-orange-600">Cloud & DevOps</Link>
                </div>
              )}
            </div>

            <Link
              to="/industries"
              onClick={() => setIsOpen(false)}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300"
            >
              Industries
            </Link>
            <a
              href={isHome ? "#about-us" : "/#about-us"}
              onClick={() => setIsOpen(false)}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300"
            >
              About
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                openContactModal();
              }}
              className="w-full text-left block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-orange-600 hover:text-orange-800 hover:bg-orange-50 hover:border-orange-300"
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
