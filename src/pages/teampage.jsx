import { motion } from "motion/react";
import { teamMembers } from "../assets/assets.js";
import TeamCard from "../components/ui/TeamCard.jsx";

const TeamPage = () => {
  const coreTeam = teamMembers.filter((m) => m.domain === "core");
  const webdTeam = teamMembers.filter((m) => m.domain === "webd");
  const aimlTeam = teamMembers.filter((m) => m.domain === "aiml");
  const creativeTeam = teamMembers.filter((m) => m.domain === "creative");
  const cpTeam = teamMembers.filter((m) => m.domain === "cp");

  return (
    <div className="min-h-screen bg-[#020B05] dark:bg-[#e8e9cd] text-white dark:text-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-600">
            Passionate individuals driving innovation and excellence
          </p>
        </motion.div>

        {/*  CORE TEAM  */}
        <Section title="Core Team" members={coreTeam} columns="core" />

        {/* WEB DEVELOPMENT  */}
        <Section title="Web Development Leads" members={webdTeam} />

        {/* CP DOMAIN  */}
        <Section title="Competitive Programming Leads" members={cpTeam} />

        {/*  AI / ML  */}
        <Section title="AI / ML Leads" members={aimlTeam} />

        {/* CREATIVE DOMAIN  */}
        <Section title="Creative Domain Lead" members={creativeTeam} />

      </div>
    </div>
  );
};

export default TeamPage;

const Section = ({ title, members, maxColumns = 4 }) => {
  if (!members.length) return null;

  let colsClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";

  if (members.length === 1) {
    colsClass = "grid-cols-1";
  } else if (members.length === 2) {
    colsClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2";
  } else if (members.length === 3) {
    colsClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
  } else if (members.length >= 4) {
    colsClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4";
  }

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Center the grid */}
      <div className="flex justify-center">
        <div className={`grid ${colsClass} gap-x-10 gap-y-8 justify-items-center`}>
          {members.map((member, idx) => (
            <TeamCard key={member._id} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};



