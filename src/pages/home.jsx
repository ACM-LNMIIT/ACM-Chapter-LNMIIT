// import glow from "../assets/glow.png";
// import glow_light from "../assets/glow_light.png";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Hero from "../components/Home/hero.jsx";
import Card from "../components/Home/card.jsx";
// import pic from "../assets/pic.png";
// import sir from "../assets/sir.png";
import { acmMotto, acmInfo, acmPara } from "../utils/utils.js";
import Button from "../components/button.jsx";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    // Check initial dark mode state from localStorage
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);

    // Listen for theme changes
    const handleThemeChange = (e) => {
      setIsDarkMode(e.detail.isDark);
    };

    window.addEventListener("themeChange", handleThemeChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);
  const cardRef = useRef(null);
  const handleScroll = () => {
    cardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    nav("/events");
  };

  return (
    <div className="min-h-fit w-screen text-white dark:text-gray-100">
      <Hero />
      <div className="mt-7 max-sm:mt-8 max-sm:mb-16 flex justify-center">
        <Button text={"Get Started Now"} onClick={handleScroll} />
      </div>
      <motion.div
        className="flex justify-center overflow-hidden mr-3"
        initial={{ y: "98%", opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 90, damping: 30 }}
      >
        {!isDarkMode ? (
          <img
            className="w-full object-cover max-w-full"
            src={
              "https://res.cloudinary.com/dx37fiakv/image/upload/v1768632217/glow_ssyjx7.png"
            }
            alt="glow effect"
          />
        ) : (
          <img
            className="w-full object-cover max-w-full"
            src={
              "https://res.cloudinary.com/dx37fiakv/image/upload/v1768633307/glow_light_fyjc7d.png"
            }
            alt="glow effect"
          />
        )}
      </motion.div>
      <div className="flex flex-col gap-16 mt-10">
        <div ref={cardRef}>
          <Card
            k={0}
            p={
              "https://res.cloudinary.com/dx37fiakv/image/upload/v1768633510/pic_kcktrp.png"
            }
            para1={acmInfo}
            para2={acmMotto}
          />
        </div>

        <Card
          k={1}
          p={
            "https://res.cloudinary.com/dx37fiakv/image/upload/v1768633466/sir_gczfgg.png"
          }
          para1={acmPara}
        />
      </div>
      {/* <TeamSection /> */}
    </div>
  );
}
