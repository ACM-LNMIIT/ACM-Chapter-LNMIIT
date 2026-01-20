import { motion } from "motion/react";

export default function Card({ title, p, para1, para2, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        w-[90%] max-w-7xl mx-auto
        p-1 rounded-3xl
        bg-gradient-to-r from-white via-sky-200-600 to-blue-300
      "
    >
      {/* Inner Card */}
      <div
        className="
          bg-[#020B05] dark:bg-[#FFFEDD]
          rounded-3xl
          px-4 sm:px-8 md:px-12
          py-8 sm:py-12
        "
      >
        {/* Heading */}
        <h2
          className="
            font-semibold
            text-center sm:text-left
            text-3xl md:text-4xl lg:text-5xl
            mb-10
            leading-[1.2]
            pb-2
            w-full
            bg-gradient-to-r from-[#c4c4c2] to-[#f1f1ef8d]
            dark:from-[#2b2b2b] dark:to-[#7e7e7e8d]
            bg-clip-text text-transparent
          "
        >
          {title}
        </h2>


        {/* Content */}
        <div
          className={`
            flex flex-col gap-8
            ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
            items-center
          `}
        >
          {/* Text */}
          <p
            className="
              text-white dark:text-gray-900
              text-sm sm:text-base md:text-lg
              leading-relaxed
              opacity-80
              w-full lg:w-1/2
            "
          >
            {para1}
            {para2 && (
              <>
                <br />
                <br />
                {para2}
              </>
            )}
          </p>

          {/* Image */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
            <img
              src={p}
              alt={title}
              className="
                w-full h-auto
                object-cover
                rounded-2xl
                transition-all duration-500 ease-out
                hover:scale-105 hover:-translate-y-2
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
