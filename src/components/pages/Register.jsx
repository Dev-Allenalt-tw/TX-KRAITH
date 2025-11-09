import React from 'react';
import { FaGoogle, FaDiscord } from 'react-icons/fa';

const Register = ({ onNavigate }) => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-tk-black rounded-xl shadow-2xl overflow-hidden max-w-md w-full relative">
        [cite_start]{/* Matches pink-white gradient and curved side [cite: 14] */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-tk-pink/30 to-white/10 opacity-50 rounded-bl-full transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="p-8 md:p-10 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-6">📝 Guild Register</h1>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="In-Game Name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-tk-red focus:border-tk-pink focus:ring focus:ring-tk-pink/50 transition duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-tk-red focus:border-tk-pink focus:ring focus:ring-tk-pink/50 transition duration-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-800 border border-tk-red focus:border-tk-pink focus:ring focus:ring-tk-pink/50 transition duration-200"
            />
             <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-gray-800 border border-tk-red focus:border-tk-pink focus:ring focus:ring-tk-pink/50 transition duration-200"
            />
            <button
              type="submit"
              className="w-full py-3 bg-tk-red text-white font-bold rounded-lg uppercase tracking-wider shadow-neon-red hover:bg-tk-pink transition duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-400">Or register with</span>
            <div className="flex justify-center space-x-4 mt-3">
              [cite_start]{/* Social login icons [cite: 14] */}
              <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-tk-pink/80 transition duration-200 border border-tk-pink/50">
                <FaGoogle size={20} />
              </button>
              <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-tk-pink/80 transition duration-200 border border-tk-pink/50">
                <FaDiscord size={20} />
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <button
              onClick={() => onNavigate('Login')}
              className="text-tk-red font-semibold hover:text-tk-pink transition duration-200"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
