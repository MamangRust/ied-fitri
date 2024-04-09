import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Ketupat from '../assets/ketupat.png';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center relative ${darkMode ? 'bg-black' : 'bg-gradient-to-b from-green-100 to-green-200'
        }`}
    >
      <button
        onClick={handleDarkMode}
        className={`absolute top-0 right-0 m-4 px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-green-600 text-white'
          } transition-colors duration-300 flex items-center space-x-2`}
      >
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-lg mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-green-700'
            } mb-6`}
        >
          Selamat Hari Raya Lebaran
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className={`text-xl ${darkMode ? 'text-gray-300' : 'text-green-800'
            } mb-10`}
        >
          Mohon maaf lahir dan batin
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-10 w-72 h-72"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mx-auto w-72 h-72"
          >
            <img src={Ketupat} alt="Ketupat" className="w-full h-full" />
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-6`}
        >
          Taqabbalallahu minna wa minkum, shiyamana wa shiyamakum.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-10`}
        >
          Semoga kita selalu diberikan keberkahan dan kebahagiaan.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-10`}
        >
          Kami sekeluarga mengucapkan Selamat Hari Raya Idul Fitri 1445 H.
          Mohon maaf lahir dan batin.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
