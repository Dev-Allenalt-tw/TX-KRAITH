import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Status from './pages/Status';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('Home'); 

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Status':
        return <Status />;
      case 'Login':
        return <Login onNavigate={setCurrentPage} />;
      case 'Register':
        return <Register onNavigate={setCurrentPage} />;
      case 'Home':
      default:
        return <Home onNavigate={setCurrentPage} />; 
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow py-12 px-4 md:px-8 lg:px-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
