import React from 'react';
// import logo from '../assets/logo.png'; 

const About = () => {
  const whatWeOffer = [
    [cite_start]'Weekly Custom Rooms & Tournaments', [cite: 6]
    [cite_start]'Guild Wars & Competitive Fights', [cite: 6]
    [cite_start]'Ranked Push Support', [cite: 6]
    [cite_start]'Active Community & Team Coordination', [cite: 6]
    [cite_start]'Opportunities for Training & Highlights', [cite: 6]
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-xl shadow-2xl border border-tk-red/50">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-tk-pink tracking-wide">
        [cite_start]🐍 TEAM KRAITH — India’s No.1 Deadly Freestyle Guild 🇮🇳 [cite: 4]
      </h1>
      <p className="text-lg text-gray-300 mb-6 border-l-4 border-tk-pink pl-4">
        Welcome to **TEAM KRAITH**! [cite_start]We are not just a guild — we are a family of fearless freestyle warriors. [cite: 4]
        [cite_start]Every member here represents skill, respect, and loyalty. [cite: 5]
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-tk-red mb-3">🔥 Our Spirit:</h2>
        <blockquote className="text-xl italic text-white bg-gray-800 p-4 rounded-lg border-l-4 border-tk-red">
          [cite_start]“Play Freestyle, Win Fearless, Rule the Arena.” [cite: 5]
        </blockquote>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-tk-pink mb-3">💥 What We Offer:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          {whatWeOffer.map((item, index) => (
            <li key={index} className="hover:text-white transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-lg text-center text-white italic mb-8">
        Join us and become part of a deadly legend.
      </p>

      <div className="text-center text-sm font-semibold tracking-wider text-tk-red mb-8">
        [cite_start]#TXKRAITH #Freestyle #IndiaNo1 [cite: 7]
      </div>

      [cite_start]{/* Guild logo and Indian flag side by side at bottom [cite: 7] */}
      <div className="flex justify-center items-center space-x-6 pt-6 border-t border-gray-700">
        <span className="text-3xl font-bold text-tk-red">TX KRAITH</span>
        <span className="text-4xl">🇮🇳</span>
      </div>
    </div>
  );
};

export default About;
