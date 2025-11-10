import React from 'react';
// import logo from '../assets/logo.png'; 

const navItems = [
  { name: 'Home', page: 'Home' },
  { name: 'About', page: 'About' },
  { name: 'Status', page: 'Status' },
  { name: 'Login', page: 'Login' },
];

const Header = ({ onNavigate, currentPage }) => {
  const isLoggedIn = false; 
  const profileAvatar = "👤"; 

  return (
    <header className="sticky top-0 z-50 bg-tk-black/90 backdrop-blur-sm border-b border-tk-red/50 shadow-neon-red/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('Home')}>
          [cite_start]{/* Placeholder for TX KRAITH logo [cite: 2] */}
          <span className="text-xl font-bold text-tk-red tracking-widest">TEAM KRAITH</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium uppercase transition-colors duration-200
                ${currentPage === item.page
                  ? 'text-tk-pink shadow-neon-pink/50'
                  : 'text-white hover:text-tk-red hover:shadow-neon-red/50'
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </nav>

        [cite_start]{/* Right side: Profile avatar [cite: 2] */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm border-2 border-tk-pink cursor-pointer">
              {profileAvatar}
            </div>
          ) : (
            <button
              onClick={() => onNavigate('Login')}
              className="md:hidden text-sm uppercase text-white hover:text-tk-pink transition-colors"
            >
              {profileAvatar}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
