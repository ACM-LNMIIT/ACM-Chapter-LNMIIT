// Helper function to parse date strings
const parseDate = (dateString) => {
  if (!dateString || dateString.toLowerCase().includes("to be declared")) {
    return new Date(0); // Far future for undefined dates
  }

  // Handle date ranges like "11/08/2025 - 17/08/2025"
  if (dateString.includes("-")) {
    const firstDate = dateString.split("-")[0].trim();
    return parseDate(firstDate);
  }

  // Handle DD/MM/YYYY format
  if (dateString.includes("/")) {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  // Fallback for other formats
  return new Date(dateString);
};

const allEventsData = {
  past: [
    {
      id: 2,
      title: "Distinguished Speaker Talk - AI in Digital Health",
      date: "05/11/2024",
      time: "8:30 AM - 10:30 AM",
      location: "LT-05, LNMIIT",
      description:
        "Talk by Dr. Sriparna Saha (IIT Patna) on AI in Digital Health, covering advancements in healthcare AI and applications of LLMs in diagnostics and patient care.",
      attendees: "100+",
      category: "seminar",
      status: "completed",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1774367270/blog-app/gw4vaod5stil1mpdqyhl.webp",
      pdfLink: "/pdfs/ai-digital-health.pdf",
      content: {
        heading: "Distinguished Speaker Talk - AI in Digital Health",
        intro:
          "Dr. Sriparna Saha from IIT Patna delivered an insightful talk on the transformative role of artificial intelligence in modern healthcare systems.",
        subheading: "AI and Healthcare Innovation",
        mainContent:
          "The session covered cutting-edge applications of Large Language Models (LLMs) and multimodal techniques in medical diagnostics, patient care, and healthcare analytics. Attendees gained insights into real-world AI implementations in digital health.",
        quote:
          "AI is revolutionizing healthcare, making diagnostics faster and more accurate.",
        applications: [
          "Medical diagnostics",
          "Patient care optimization",
          "Healthcare analytics",
          "LLM applications in medicine",
        ],
      },
    },
    {
      id: 3,
      title: "CodeQuest - The Ultimate Coding Challenge",
      date: "20/11/2024",
      time: "8:00 PM",
      location: "Online Event",
      description:
        "Competitive coding contest featuring algorithmic and problem-solving challenges for Y22, Y23, and Y24 batches, with rewards for top performers.",
      attendees: "150+",
      category: "workshop",
      status: "completed",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1774367277/blog-app/pd3nmrbg6wnonceo3vpl.webp",
      pdfLink: "/pdfs/codequest.pdf",
      content: {
        heading: "CodeQuest - The Ultimate Coding Challenge",
        intro:
          "CodeQuest brought together coding enthusiasts from multiple batches for an intense competitive programming competition with a prize pool of ₹8000.",
        subheading: "Competition Format",
        mainContent:
          "Participants tackled algorithmic challenges testing data structures, dynamic programming, and problem-solving skills. The online format allowed students to compete from anywhere, with top performers receiving cash prizes.",
        quote: "Code. Compete. Conquer!",
        applications: [
          "Algorithmic problem solving",
          "Data structures mastery",
          "Competitive programming",
          "Time complexity optimization",
        ],
      },
    },
    {
      id: 4,
      title: "Big O Rush - Code Hunt",
      date: "08/04/2025",
      time: "6:00 PM",
      location: "LT-10, LNMIIT",
      description:
        "A hybrid event merging coding challenges with a treasure hunt across four competitive rounds, testing problem-solving, aptitude, and campus exploration skills.",
      attendees: "200+", // Updated from 50+ to 200+
      category: "hackathon",
      status: "completed",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768631118/bigORush_ge8itg.jpg",
      pdfLink: "/pdfs/big-o-rush.pdf",
      content: {
        heading: "Big O Rush - Code Hunt",
        intro:
          "Big O Rush combined the thrill of competitive coding with an adventurous treasure hunt across the LNMIIT campus, creating a unique hackathon-style experience.",
        subheading: "🎉 Big O' Rush 2025 — Mission Accomplished! 🎉",
        mainContent:
          "We're thrilled to announce that ACM LNMIIT successfully conducted Big O' Rush — a thrilling journey through codes, clues, and chaos! 🧩💻 With 200+ participants showcasing incredible energy, problem-solving skills, and teamwork, the event was a massive success. 🚀 From decoding complex puzzles to racing against time, the participants truly made this event unforgettable. A big thank you to everyone who joined us and to the organizing team who worked tirelessly behind the scenes! 🙌 Here's to more such exciting adventures ahead!",
        quote:
          "The Winning Team Doesn't Just Celebrate—Everyone Takes Home a Prize!",
        applications: [
          "Team collaboration",
          "Problem-solving under pressure",
          "Campus exploration",
          "Capture The Flag challenges",
          "🥇 First Place: Team Spirit KGP",
          "🥈 Second Place: Team Crystals",
          "🥉 Third Place: Team QuadCoders",
          "Swipe through to catch glimpses of the action-packed evening! 📸✨",
        ],
      },
    },
    {
      id: 9,
      title: "Code Quest 2.0",
      date: "17/01/2026",
      time: "10:00 AM",
      location: "AI Lab, LNMIIT",
      description:
        "Competitive coding contest featuring algorithmic challenges and problem-solving exercises.",
      attendees: "80",
      category: "contest",
      status: "completed",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1774367276/blog-app/eo8po2nreuvpmq3s8ywm.webp",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScTiJQieby_mEoTtMj6Iohe-q4RPSx6TrxDiJaDVNQS6tLi_g/viewform?usp=sharing&ouid=102111210845982472815",
      content: {
        heading: "Code Quest 2.0",
        intro:
          "The ACM Student Chapter at LNMIIT is pleased to announce Code Quest 2.0, a competitive programming contest designed to challenge and enhance problem-solving skills among students. The contest was conducted on 17th January 2025 on the Codeforces platform and was held offline at LT-1 and LT-2.",
        subheading: "Event Details",
        mainContent:
          "Eligibility: All LNMIIT Students | Registration Fee: Free of cost | Venue: LT-1 & LT-2 (Offline) | Platform: Codeforces | Timing: 2 PM - 5 PM | Prize Pool: ₹18,000 | 1st Prize: ₹7,000 | 2nd Prize: ₹5,000 | 3rd Prize: ₹3,000 | 4th Prize: ACM Membership (1 year – worth ₹1,475) | 5th Prize: ACM Membership (1 year – worth ₹1,475). Participants enjoyed well-curated problem sets, a competitive atmosphere, and an enriching learning experience.",
        quote: "🚀 Code Quest 2.0 | Successfully Concluded 🚀",
        applications: [
          "ACM Student Chapter, LNMIIT successfully conducted Code Quest 2.0",
          "The event witnessed enthusiastic participation from students across batches",
          "Fostered competitive environment focused on algorithmic thinking",
          "🏆 Winners: Paramveer Singh (23UCS743) — ₹7,000",
          "Alakshendra Bhardwaj (23UCC622) — ₹5,000",
          "Keshav Laddha (23UCS616) — ₹3,000",
          "Aditya Kedawat (23UEC041) — ACM Membership (1 Year)",
          "Mehul Shah (23UCS645) — ACM Membership (1 Year)",
          "Congratulations to all winners and participants",
          "Thanks to Nitesh Pradhan Sir, Md Imran Alam Sir, Dr. Rajbir Kaur Ma'am",
          "Thanks to ACM India for continued support",
          "🔔 Up Next: INSIGHT X on 25th January 2025",
        ],
      },
    },
  ],

  upcoming: [
    {
      id: 6,
      title: "Big O Rush 2.0",
      date: "to be declared",
      time: "2:00 PM",
      location: "LT-05, LNMIIT",
      description:
        "The sequel to our popular coding treasure hunt! Big O Rush returns with more challenges, puzzles, and exciting prizes.",
      attendees: "100+",
      category: "Hackathon",
      status: "upcoming",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1774367275/blog-app/bbkti65nyivs7ni1qhrx.webp",
      registrationLink: "#register-bor2",
    },
    {
      id: 7,
      title: "InsightX: Data Science Workshop",
      date: "25/01/2026",
      time: "3:00 PM",
      location: "LNMIIT Campus",
      description:
        "Hands-on workshop on data visualization, analysis, and machine learning techniques using Python and modern data science tools.",
      attendees: "60",
      category: "Hands-On Experience",
      status: "upcoming",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1774367306/blog-app/r3t85gt2ioz74hskx4tk.webp",
      registrationLink: "https://forms.gle/YLoqy37Wq7MBDT796",
    },
    {
      id: 8,
      title: "Prompt Wars: AI Prompt Engineering Challenge",
      date: "to be declared",
      time: "10:00 AM",
      location: "AI Lab, LNMIIT",
      description:
        "Competition to craft the most effective AI prompts. Test your skills against Large Language Models and win exciting prizes.",
      attendees: "80",
      category: "competition",
      status: "upcoming",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626825/promptWars_gu5fkb.jpg",
      registrationLink: "#register-promptwars",
    },
  ],
};

// Sort functions
const sortPastEvents = (events) => {
  return [...events].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA; // Most recent first for past events
  });
};

const sortUpcomingEvents = (events) => {
  return [...events].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    // Handle "to be declared" dates (they get Date(0))
    if (dateA.getTime() === 0 && dateB.getTime() === 0) {
      return 0; // Both undefined, keep original order
    }
    if (dateA.getTime() === 0) return 1; // Undefined dates go last
    if (dateB.getTime() === 0) return -1; // Defined dates come first

    return dateA - dateB; // Earliest first for upcoming events
  });
};

// Create sorted arrays
const sortedPastEvents = sortPastEvents(allEventsData.past);
const sortedUpcomingEvents = sortUpcomingEvents(allEventsData.upcoming);

// Export sorted events
export const allEvents = {
  past: sortedPastEvents,
  upcoming: sortedUpcomingEvents,
};

// Helper functions
export const getPastEvents = () => allEvents.past;
export const getUpcomingEvents = () => allEvents.upcoming;
export const getAllEvents = () => [...allEvents.past, ...allEvents.upcoming];
