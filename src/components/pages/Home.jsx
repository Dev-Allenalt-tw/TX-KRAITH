import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickStats from '../components/QuickStats';

const Home = ({ onNavigate }) => {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <QuickStats />
    </div>
  );
};

export default Home;
