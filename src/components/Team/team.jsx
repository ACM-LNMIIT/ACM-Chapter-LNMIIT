import { teamMembers } from '../../assets/assets.js';
import { EvervaultCard } from '../ui/evervault-card.jsx';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="flex flex-col gap-6 dark:bg-gradient-to-b dark:from-[#fbfbd3] dark:to-[#f0e9ba] items-center bg-gradient-to-b from-[#1F2321] to-[#020B05] text-white px-4 sm:px-6 lg:px-10">
      {/* Header Section */}
      <div className="mt-8 text-center">
        <h1 className="bg-gradient-to-b from-[#F1F1EF] via-slate-100 to-[#f1f1ef8d] dark:bg-gradient-to-b dark:from-[#020B05] dark:via-slate-900 dark:to-[#020B058d] bg-clip-text text-transparent text-4xl sm:text-3xl lg:text-4xl font-medium">
          Team
        </h1>
        <p className="text-[#F1F1EF99] dark:text-[#020B0599] font-light text-sm sm:text-base">
          Meet the Team
        </p>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-4 w-full pt-2">
        {teamMembers.slice(0, 4).map((item, index) => (
          <div
            className="p-0.5 rounded-xl bg-gradient-to-b from-[rgba(49,151,102,0.3)] to-[rgba(244,190,0,0.5)]"
            key={index}>
            <div className="rounded-xl bg-gradient-to-b from-[#1F2321] to-[#020B05]">
              <EvervaultCard className={"w-[21rem] h-[25rem] dark:bg-gradient-to-b dark:from-[#fbfbd3] dark:to-[#f0e9ba]"}>
                <div className="flex flex-col gap-0 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                  <div className="flex justify-center mt-4">
                      <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                   </div>

                    {/* For Blue Shade
                   <div className="flex justify-center mt-4">
                    <div className="w-72 h-72 rounded-full border-4 border-white 
                                    overflow-hidden flex items-center justify-center
                                    transition-shadow duration-300
                                    hover:shadow-[0_0_20px_5px_rgba(135,206,250,0.5)]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div> */}

                  {/* <div className="flex gap-2 mt-2 dark:text-gray-900">
                    {item.techStack.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-[#494949] text-white text-xs px-3 py-1 rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div> */}

                  <div className="p-2 text-gray-700 mt-2 text-center">
                    <p className="text-base sm:text-lg font-medium dark:text-[#020B05] text-[#F1F1EF]">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base font-inter dark:text-[#020B05] text-[#f1f1eff5] opacity-80">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </EvervaultCard>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className='mt-5 mb-8'>
        <Link
          to="/team"
          onClick={() => window.scrollTo({ top: 20, behavior: "smooth" })}
          className="px-7 py-3
        rounded-full
        font-semibold
        tracking-wide

        transition-all duration-300 ease-in-out
        transform

        /* BASE */
        bg-transparent
        text-white
        border border-sky-300
        shadow-md

        /* HOVER */
        hover:scale-105
        hover:bg-gray-900
        hover:text-white
        hover:border-sky-400
        hover:opacity-90

        /* ACTIVE */
        active:scale-95

        /* DARK MODE */
        dark:bg-slate-900
        dark:text-sky-400
        dark:border-sky-500
        dark:hover:bg-slate-800
        dark:hover:text-sky-300 "
        >
          Our Whole Team
        </Link>
      </div>
    </div>
  );
};

export default Team;
