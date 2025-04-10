import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";

function Header() {
  return (
<section>

      {/* Background Glow Elements */}
      <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-purple-800 opacity-30 rounded-full blur-3xl animate-pulse dark:bg-purple-900"></div>
      <div className="absolute bottom-[-120px] right-[-60px] w-[400px] h-[400px] bg-pink-800 opacity-20 rounded-full blur-3xl animate-pulse dark:bg-pink-900"></div>

{/* Tagline with Typewriter */}
<motion.p
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-400 mb-4"


>
Reduxcorporation -  

  <span>
    <Typewriter
      words={['Design.', 'Development.', 'Innovation.']}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</motion.p>


      {/* Main Heading */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900 dark:text-white"
>
  A <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-purple-400 dark:via-pink-400 dark:to-red-500">CREATIVE AGENCY</span><br />
  WITH <span className="text-purple-600 dark:text-pink-300 drop-shadow-md">A TWIST</span>
</motion.h1>


      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-10"
      >
        We didn’t just design. We went beyond to <strong className="text-purple-700 dark:text-pink-400 font-semibold">INVENT</strong> something truly innovative.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative inline-block px-10 py-3 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 text-white font-semibold text-sm shadow-2xl transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10">GET STARTED →</span>
        <span className="absolute inset-0 bg-white opacity-10 blur-sm transition-all duration-500 hover:scale-110"></span>
      </motion.button>
    </section>
  );
}

export default Header;
