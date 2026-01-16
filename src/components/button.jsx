import { useState } from "react";
import glow from "../assets/glow.png";

export default function Button({ text, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        backgroundImage: `url(${glow})`,
        backgroundSize: "100% 200%",
        backgroundRepeat: "no-repeat",
      }}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      className="glow-on-hover cursor-pointer max-sm:text-[0.5rem] rounded-3xl max-w-fit text-white"
    >
      <div className={`${hover ? "bg-black" : ""} py-2.5 px-6 rounded-3xl`}>
        {text} &rarr;
      </div>
    </div>
  );
}
