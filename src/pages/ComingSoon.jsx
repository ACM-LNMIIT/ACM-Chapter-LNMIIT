import { motion } from "motion/react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen dark:bg-[#e8e9cd] bg-[#020B05] flex items-center justify-center text-gray-900 dark:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col gap-3"
      >
        <p className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Coming Soon
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;