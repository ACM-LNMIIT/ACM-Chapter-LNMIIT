import { useState } from "react";
// import glow from "../assets/glow.png";

export default function Button({ text, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
       // backgroundImage: `url(${"https://res.cloudinary.com/dx37fiakv/image/upload/v1768632217/glow_ssyjx7.png"})`,
        backgroundSize: "100% 200%",
        backgroundRepeat: "no-repeat",
      }}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-3xl"
    >
      <div className={`${hover ? "cursor-pointer" : ""} py-2.5 px-6 rounded-3xl`}>
        {text} &rarr;
      </div>
    </div>
  );
}
