import { motion } from "motion/react";
import { EvervaultCard } from "./evervault-card.jsx";

const TeamCard = ({ member, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-0.5 rounded-xl bg-gradient-to-b from-[rgba(49,151,102,0.3)] to-[rgba(244,190,0,0.5)]"
    >
      <div className="rounded-xl bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba]">
        <EvervaultCard
            className={`w-full ${
                member.domain === "core" ? "h-[480px] sm:h-[520px]" : "h-[400px]"
            }`}
        >
          <div className="flex flex-col h-full overflow-hidden rounded-xl">

            {/* Image */}
            <div className="flex-1 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover ${
                member.domain === "webd" || member.domain === "aiml" ? "object-[center_15%]" : "object-center"
            }`}
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-lg font-bold text-white dark:text-[#020B05]">
                {member.name}
              </p>
              {member.domain === "core" && (
                <p className="text-sm text-gray-400 dark:text-gray-600">
                {member.designation}
                </p>
               )}
            </div>

          </div>
        </EvervaultCard>
      </div>
    </motion.div>
  );
};

export default TeamCard;
