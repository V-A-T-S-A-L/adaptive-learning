import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icon library (optional)
import { Link } from "react-router-dom"; // if using routing

const Navbar = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-black dark:text-white">
          MyApp
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-black dark:text-white">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-black dark:text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-black dark:text-white">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
          <button
            onClick={() => setDark(!dark)}
            className="mt-2 px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
