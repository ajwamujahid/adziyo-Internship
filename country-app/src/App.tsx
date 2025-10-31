
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountryList from "./pages/CountryList";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
        }`}
      >
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<CountryList darkMode={darkMode} />} />
          <Route path="/country/:name" element={<CountryDetail darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
