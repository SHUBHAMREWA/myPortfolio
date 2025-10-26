import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-opacity-20 backdrop-blur-md hover:scale-110 transition-transform duration-300"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FiSun className="text-primary-green" size={24} />
      ) : (
        <FiMoon className="text-dark-green" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
