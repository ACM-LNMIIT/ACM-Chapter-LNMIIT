import { useEffect, useState } from "react";
import glow2 from "../../assets/glow2.png";
import { motion } from "motion/react";

export default function Card({ k, p, para1, para2 }) {
  const [showBounce, setShowBounce] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBounce(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      animate={{
        y: [0, showBounce ? 0 : 0, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
      className="flex overflow-hidden border-0 w-[70vw] max-sm:h-[50vh] max-sm:w-[75vw] h-[75vh] p-1 mx-auto rounded-[2.1rem] bg-gradient-to-r from-green-300 via-green-600 to-yellow-600 "
    >
      <div
        className={`bg-[#020B05] dark:bg-[#FFFEDD] h-full w-full border-0 rounded-[2.1rem] flex  ${
          k ? "flex-col-reverse justify-end" : " flex-col justify-end"
        }`}
      >
        <div
          className={`flex font-semibold max-sm:text-[2rem] text-[4rem] px-16 max-sm:px-4 mb-12 max-sm:mb-1.5 bg-gradient-to-r from-[#c4c4c2] to-[#f1f1ef8d] dark:bg-gradient-to-r dark:from-[#2b2b2b] dark:to-[#7e7e7e8d] bg-clip-text text-transparent ${
            k ? "hidden" : ""
          }`}
        >
          About Us
        </div>
        <div
          className={`flex max-sm:flex-col-reverse max-sm:items-center w-full px-12 max-sm:px-2 max-sm:mb-1 max justify-between ${
            k ? "" : "-mb-24"
          }`}
        >
          <p className="text-white dark:text-gray-900 pt-2 text-[1.2rem] max-sm:text-[0.5rem] opacity-70 w-[50%] max-sm:w-full max-sm:-mb-5">
            {para1}
            <br></br>
            <br></br>
            {para2}
          </p>
          <div
            className={`flex w-[40%] max-sm:w-[60%] max-sm:mb-1 border-0 rounded-2xl overflow-hidden ${
              k ? "-mt-12" : ""
            }`}
          >
            <img className="object-fill" src={p}></img>
          </div>
        </div>
        <div
          className={`flex font-semibold text-[4rem] dark:bg-gradient-to-r dark:from-[#2b2b2b] dark:to-[#7e7e7e8d] max-sm:pt-[7rem] max-sm:px-4 max-sm:text-[1.7rem] pl-12 mb-12 bg-gradient-to-r from-[#c4c4c2] to-[#9d9d9d8d] bg-clip-text text-transparent ${
            k ? "-mt-40" : "hidden"
          }`}
        >
          Meet Our Chapter's
          <br /> Faculty Mentor
        </div>
        <div className={`flex relative ${!k ? "" : "rotate-180"}`}>
          <img className="object-fill" src={glow2}></img>
        </div>
      </div>
    </motion.div>
  );
}
