import { Moon, Sun } from "lucide-react";

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const Navbar = ({ darkMode, toggleTheme }: NavbarProps) => {
  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 shadow-md transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
    
      <h1 className="text-3xl font-bold">Where in the World</h1>

    
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
          darkMode
            ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        {darkMode ? (
          <>
            <Sun size={20} /> Light Mode
          </>
        ) : (
          <>
            <Moon size={20} /> Dark Mode
          </>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
