import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex justify-between">
      <div className="max-sm:w-[45vw] w-[23vw]">
        <div className="w-full flex">
          <img className="object-fill" src={image2}></img>
        </div>
      </div>
      <div className="text-white mt-[16vh] max-sm:mt-[12vh] w-full flex flex-col items-center justify-end">
        <p className="text-[4rem] max-sm:text-[1.5rem] font-bold bg-gradient-to-r from-[#F1F1EF] to-[#f1f1ef8d] dark:from-[#020B05] dark:to-[#020B05] bg-clip-text text-transparent">
          Welcome to ACM
        </p>
        <p className="text-[4rem] max-sm:text-[1.5rem] font-bold bg-gradient-to-b from-[#9f9f9f] to-[#8383838d] dark:bg-gradient-to-b dark:from-[#3d3d3d] dark:to-[#3838388d] bg-clip-text text-transparent">
          LNMIIT
        </p>
        <motion.p className="tracking-widest dark:text-gray-900 opacity-35 max-sm:text-[0.55rem]">
          {"The LNMIIT, Jaipur Student Chapter".split(" ").map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: i / 15,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div className="max-sm:w-[45vw] w-[23vw] mr-4">
        <div className="w-full flex justify-end">
          <img className="object-fill" src={image1}></img>
        </div>
      </div>
    </div>
  );
}
