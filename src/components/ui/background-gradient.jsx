import React from "react";
import { motion } from "framer-motion";

const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div className={`relative p-[3px] group ${containerClassName || ""}`}>
      {/* Rounded Glow */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 6, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{ backgroundSize: "300% 300%" }}
        className="
          absolute inset-0 z-[1]
          rounded-lg
          opacity-0 group-hover:opacity-30
          blur-lg
          transition duration-500
          bg-[radial-gradient(circle_farthest-side_at_50%_50%,#60A5FA,transparent)]
        "
      />

      {/* Content */}
      <div
        className={`relative z-10 rounded-2xl overflow-hidden ${className || ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;
