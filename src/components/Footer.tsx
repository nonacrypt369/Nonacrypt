import { Link } from "react-router-dom";

interface FooterProps {
  openContactModal: () => void;
}

export default function Footer({ openContactModal }: FooterProps) {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white tracking-tighter mb-4 block">
              Nonacrypt
            </span>
            <p className="text-slate-400 max-w-sm">
              A global software solutions and engineering services company that
              helps world's leading organizations turn challenges into lasting
              business value.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/services/data-analytics" className="hover:text-orange-500 transition-colors">
                  Data & Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/data-science" className="hover:text-orange-500 transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/services/ai-development" className="hover:text-orange-500 transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/services/devops" className="hover:text-orange-500 transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/" state={{ scrollTo: "about-us" }} className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <button onClick={openContactModal} className="hover:text-orange-500 transition-colors bg-transparent border-none p-0 text-left cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Nonacrypt. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
