import React from 'react';
import profileIcon from '../assets/profile_icon.png'; [cite_start]// Profile image [cite: 3]

const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 bg-hero-gradient rounded-xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="text-4xl font-extrabold text-tk-pink mb-4 tracking-wider uppercase">
             TEAM KRAITH
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            [cite_start]India’s No.1 Deadly Freestyle Guild 🇮🇳 [cite: 3]
          </h1>
          <p className="text-lg text-gray-300 italic mb-8 border-l-4 border-tk-red pl-4">
            [cite_start]“Play Freestyle, Win Fearless, Rule the Arena.” [cite: 3, 5]
          </p>
          <button
            onClick={() => onNavigate('Register')}
            className="px-8 py-3 text-lg font-bold uppercase rounded-full bg-tk-pink text-white transition-all duration-300
                       shadow-neon-pink hover:bg-tk-red hover:shadow-neon-red tracking-wider"
          >
            Join Guild
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center relative">
          <img
            src={profileIcon}
            alt="Guild Profile Icon"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-tk-red shadow-neon-red/70 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
