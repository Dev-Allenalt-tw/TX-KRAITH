import React from 'react';
import { FaGoogle, FaDiscord } from 'react-icons/fa'; 

const Login = ({ onNavigate }) => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-tk-black rounded-xl shadow-2xl overflow-hidden max-w-md w-full relative">
        [cite_start]{/* Matches pink-white gradient and curved side [cite: 14] */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-tk-pink/30 to-white/10 opacity-50 rounded-bl-full transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="p-8 md:p-10 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-6">🔐 Guild Login</h1>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Guild ID or Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-tk-red focus:border-tk-pink focus:ring focus:ring-tk-pink/50 transition duration-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-800 border border-tk-red focus:border-tk-pink focus:ring focus:ring-tk-pink/50 transition duration-200"
            />
            <button
              type="submit"
              className="w-full py-3 bg-tk-pink text-white font-bold rounded-lg uppercase tracking-wider shadow-neon-pink hover:bg-tk-red transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-400">Or continue with</span>
            <div className="flex justify-center space-x-4 mt-3">
              [cite_start]{/* Social login icons [cite: 14] */}
              <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-tk-red/80 transition duration-200 border border-tk-red/50">
                <FaGoogle size={20} />
              </button>
              <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-tk-red/80 transition duration-200 border border-tk-red/50">
                <FaDiscord size={20} />
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <button
              onClick={() => onNavigate('Register')}
              className="text-tk-pink font-semibold hover:text-tk-red transition duration-200"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
