import 'animate.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../App';
import brandLogo from '../../assets/health.png';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-cardBorder transition-colors duration-500 rounded-b-xl px-6 sm:px-10 lg:px-16 py-4 flex justify-between items-center shadow-sm">
      <NavLink
        to="/"
        className="flex items-center gap-2 group"
      >
        <div className="flex items-center gap-3 transition-all duration-300">
          <img src={brandLogo} alt="Logo" className="w-10 h-10 object-contain drop-shadow-md transition-transform duration-300 group-hover:rotate-3" />
          <h1 className='text-3xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'>
            MediScan System
          </h1>
        </div>
      </NavLink>

      <div className='flex items-center gap-6 font-semibold'>
        <NavLink
          to="/predict"
          className={({ isActive }) =>
            `relative px-5 py-2.5 rounded-xl transition-all duration-300 ${isActive ? "text-blue-600 dark:text-blue-400" : "text-foreground hover:text-blue-600 dark:hover:text-blue-400"}`
          }
        >
          {({ isActive }) => (
            <>
              <span className="relative z-10">Predict Disease</span>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 dark:border-blue-400/20 rounded-xl"
                />
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative px-5 py-2.5 rounded-xl transition-all duration-300 ${isActive ? "text-blue-600 dark:text-blue-400" : "text-foreground hover:text-blue-600 dark:hover:text-blue-400"}`
          }
        >
          {({ isActive }) => (
            <>
              <span className="relative z-10">About Us</span>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 dark:border-blue-400/20 rounded-xl"
                />
              )}
            </>
          )}
        </NavLink>

        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-4 p-2 rounded-full bg-card border border-cardBorder shadow-sm text-foreground hover:bg-foreground hover:text-background transition-colors focus:outline-none flex items-center justify-center h-10 w-10"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </motion.button>
      </div>
    </header>
  )
}

export default Header;
