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
              <EvervaultCard className={"w-[21rem] h-[29rem] dark:bg-gradient-to-b dark:from-[#fbfbd3] dark:to-[#f0e9ba]"}>
                <div className="flex flex-col gap-0 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                  <div className="w-full h-96 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* <div className="flex gap-2 mt-2 dark:text-gray-900">
                    {item.techStack.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-[#494949] text-white text-xs px-3 py-1 rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div> */}
                  <div className="p-2 text-gray-700">
                    <p className="text-base sm:text-lg font-medium dark:text-[#020B05] text-[#F1F1EF]">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base font-inter dark:text-[#020B05] text-[#F1F1EF99] opacity-80">
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
      <div className='mb-4'>
        <Link to="/team" className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 inline-block">
          Our Whole Team
        </Link>
      </div>
    </div>
  );
};

export default Team;
