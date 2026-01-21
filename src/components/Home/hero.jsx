import { motion } from "motion/react";
import LightRays from "../LightRays";
import Button from "../button.jsx";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleScroll = () => {
    navigate("/events");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/*  Light Rays Background */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#75c1ff"
          raysSpeed={1.4}
          lightSpread={1.1}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.15}
          fadeDistance={0.9}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <p className="text-[4rem] max-sm:text-[1.5rem] font-bold
          bg-gradient-to-r from-[#F1F1EF] to-[#f1f1ef8d]
          bg-clip-text text-transparent">
          Welcome to ACM
        </p>

        <p className="text-[4rem] max-sm:text-[1.5rem] font-bold
          bg-gradient-to-b from-[#9f9f9f] to-[#8383838d]
          bg-clip-text text-transparent">
          LNMIIT
        </p>

        <motion.p className="tracking-widest opacity-40 max-sm:text-[0.55rem] mt-4">
          {"The LNMIIT, Jaipur Student Chapter".split(" ").map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: i / 15 }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.p>

        {/* ✅ BUTTON */}
        <div className="mt-10">
          <Button text="Get Started Now" onClick={handleScroll} />
        </div>
          
      </div>
    </section>
  );
}
