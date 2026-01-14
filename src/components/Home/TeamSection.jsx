import { motion } from "motion/react";
import { teamMembers } from "../../assets/assets.js";
import { EvervaultCard } from "../ui/evervault-card.jsx";

const TeamSection = () => {
  // ✅ Only CORE TEAM (4 members)
  const coreTeam = teamMembers.filter(
    (member) => member.domain === "core"
  );

  return (
    <div className="w-full bg-gradient-to-b from-[#020B05] to-[#1F2321] dark:from-[#e8e9cd] dark:to-[#fbfbd3] py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* CORE TEAM HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Core Team
          </h2>
          <p className="text-gray-400 dark:text-gray-600 text-lg">
            The leadership driving our vision forward
          </p>
        </motion.div>

        {/* CORE TEAM GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {coreTeam.map((member, idx) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-0.5 rounded-xl bg-gradient-to-b from-[rgba(49,151,102,0.3)] to-[rgba(244,190,0,0.5)]"
            >
              <div className="rounded-xl bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
                <EvervaultCard className="w-full h-[350px]">
                  <div className="flex flex-col h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-500">

                    {/* IMAGE */}
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover ${
                          member.domain === "webd" || member.domain === "aiml" ? "object-[center_15%]" : "object-center"
                        }`}
                      />
                    </div>

                    {/* INFO */}
                    <div className="p-4 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.techStack?.map((badge, i) => (
                          <span
                            key={i}
                            className="bg-green-500/20 dark:bg-green-700/20 text-green-400 dark:text-green-600 text-xs px-2 py-1 rounded-full font-semibold"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <p className="text-lg font-bold text-white dark:text-[#020B05] mb-1">
                        {member.name}
                      </p>

                      <p className="text-sm text-gray-400 dark:text-gray-600 font-medium">
                        {member.designation}
                      </p>
                    </div>

                  </div>
                </EvervaultCard>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW FULL TEAM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="/team"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
          >
            View Full Team
          </a>
        </motion.div>

      </div>
    </div>
  );
};
//removed
export default TeamSection;
