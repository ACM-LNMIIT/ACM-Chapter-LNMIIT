import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

const BackgroundGradient = ({ children, className, containerClassName, animate = true }) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={`relative p-[4px] group ${containerClassName || ""}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 z-[1] opacity-0 group-hover:opacity-40 blur-md transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#FFD700,transparent),radial-gradient(circle_farthest-side_at_100%_0,#FF4500,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#32CD32,transparent),radial-gradient(circle_farthest-side_at_0_0,#1E90FF,#141316)]`}

      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute mx-8 inset-0 z-[1] opacity-0 group-hover:opacity-40 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#FFD700,transparent),radial-gradient(circle_farthest-side_at_100%_0,#FF4500,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#32CD32,transparent),radial-gradient(circle_farthest-side_at_0_0,#1E90FF,#141316)]`}

      />
      <div className={`relative z-10 ${className || ""}`}>{children}</div>
    </div>
  );
};

export default BackgroundGradient
