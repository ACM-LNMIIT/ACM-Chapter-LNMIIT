import { motion } from "motion/react";
import { EvervaultCard } from "./evervault-card.jsx";
import { LinkedinIcon, InstagramIcon, MailIcon } from "lucide-react";

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
          className={`mx-auto w-[260px] ${
            member.domain === "core" ? "h-[380px]" : "h-[360px]"
          }`}
        >
          <div className="flex flex-col h-full overflow-hidden rounded-xl">

            {/* Image */}
            <div className="flex justify-center pt-6">
              <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-white-400">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
           <div className="p-4 text-center">
              <p className="text-lg font-bold text-white dark:text-[#020B05]">
                {member.name}
              </p>

              {member.domain === "core" && (
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  {member.designation}
                </p>
              )}
            </div>



            <div className="flex justify-center">
              {/* social handles */}
              {member.handles && (
                <div className="flex justify-center gap-4 pb-4 mt-auto">
                  {member.handles.linkedin && (
                    <a
                      href={member.handles.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-[#020B05] hover:text-white transition-transform duration-300 ease-in-out hover:scale-125"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                  )}

                  {member.handles.instagram && (
                    <a
                      href={member.handles.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                       className="text-gray-400 hover:text-pink-500
                                  transition-transform duration-300 ease-in-out
                                  hover:scale-125 duration-400 "
                    >
                      <InstagramIcon size={20} />
                    </a>
                  )}

                  {/* {member.handles.email && (
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${member.handles.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-transform duration-300 ease-in-out hover:scale-125"
                    >
                      <MailIcon size={20} />
                    </a>
                  )} */}
                </div>
              )}

            </div>
          </div>
        </EvervaultCard>
      </div>
    </motion.div>
  );
};

export default TeamCard;
