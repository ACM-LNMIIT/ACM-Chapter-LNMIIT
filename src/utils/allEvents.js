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
      id: 1,
      title: "ACM Domains Orientation and Recruitment",
      date: "14/09/2024",
      time: "1:00 PM",
      location: "LT-05, LNMIIT",
      description:
        "Introduced prospective members to the various domains of the ACM Student Chapter LNMIIT, outlined responsibilities, and initiated the recruitment process.",
      attendees: "50+",
      category: "recruitment",
      status: "completed",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626932/orientation_qq8smz.jpg",
      pdfLink: "/pdfs/acm-orientation.pdf",
      content: {
        heading: "ACM Domains Orientation and Recruitment",
        intro:
          "The ACM Student Chapter LNMIIT organized an orientation event to introduce prospective members to various technical domains and kickstart the recruitment process.",
        subheading: "Event Highlights",
        mainContent:
          "This in-house event provided an overview of different ACM domains including web development, competitive programming, AI/ML, and cybersecurity. Members learned about responsibilities and opportunities within the chapter.",
        quote: "Advancing Computing as a Science and Profession",
        applications: [
          "Member recruitment",
          "Domain exploration",
          "Skill development",
          "Community building",
        ],
      },
    },
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
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626901/acmSpeaker_ofnudr.jpg",
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
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626846/codeQuest_l7cizo.png",
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
      attendees: "50+",
      category: "hackathon",
      status: "completed",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768631118/bigORush_ge8itg.jpg",
      pdfLink: "/pdfs/big-o-rush.pdf",
      content: {
        heading: "Big O Rush - Code Hunt",
        intro:
          "Big O Rush combined the thrill of competitive coding with an adventurous treasure hunt across the LNMIIT campus, creating a unique hackathon-style experience.",
        subheading: "Multi-Round Challenge",
        mainContent:
          "Teams of 2-4 members navigated through four competitive rounds featuring coding puzzles, aptitude challenges, and campus exploration tasks. The event culminated in a CTF-style final round with prizes including gaming keyboards, wireless earbuds, and Ferrero Rocher.",
        quote:
          "The Winning Team Doesn't Just Celebrate—Everyone Takes Home a Prize!",
        applications: [
          "Team collaboration",
          "Problem-solving under pressure",
          "Campus exploration",
          "Capture The Flag challenges",
        ],
      },
    },
    {
      id: 5,
      title: "Recruitment for Y-24 Batch",
      date: "11/08/2025 - 17/08/2025",
      time: "Online",
      location: "Online",
      description:
        "Recruitment drive aimed at onboarding enthusiastic and skilled members from the Y-24 batch into the ACM LNMIIT Student Chapter.",
      attendees: "100+",
      category: "recruitment",
      status: "completed",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626828/recruit_ux6tge.jpg",
      pdfLink: "/pdfs/y24-recruitment.pdf",
      content: {
        heading: "Recruitment for Y-24 Batch",
        intro:
          "The ACM LNMIIT Student Chapter conducted an extensive online recruitment drive to welcome fresh talent from the Y-24 batch into the community.",
        subheading: "Selection Process",
        mainContent:
          "The week-long recruitment process evaluated candidates based on technical skills, problem-solving abilities, and enthusiasm for technology. Successful candidates joined various domains including web development, competitive programming, and AI/ML.",
        quote: "We Are Recruiting - Join the ACM LNMIIT Family",
        applications: [
          "Member onboarding",
          "Skill assessment",
          "Domain allocation",
          "Community expansion",
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
      category: "hackathon",
      status: "upcoming",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626893/bor2_pnmzl3.jpg",
      registrationLink: "#register-bor2",
    },
    {
      id: 7,
      title: "InsightX: Data Science Workshop",
      date: "25/01/2025",
      time: "3:00 PM",
      location: "Data Lab, CS Department",
      description:
        "Hands-on workshop on data visualization, analysis, and machine learning techniques using Python and modern data science tools.",
      attendees: "60",
      category: "workshop",
      status: "upcoming",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583407/insightX_e9wj6l.jpg",
      registrationLink: "#register-insightx",
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
      category: "workshop",
      status: "upcoming",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626825/promptWars_gu5fkb.jpg",
      registrationLink: "#register-promptwars",
    },
    {
      id: 9,
      title: "Code Quest",
      date: "17/01/2025",
      time: "10:00 AM",
      location: "AI Lab, LNMIIT",
      description:
        "Competitive coding contest featuring algorithmic challenges and problem-solving exercises.",
      attendees: "80",
      category: "workshop",
      status: "upcoming",
      popupImage:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626884/codeQPoster_p4guqe.jpg",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScTiJQieby_mEoTtMj6Iohe-q4RPSx6TrxDiJaDVNQS6tLi_g/viewform?usp=sharing&ouid=102111210845982472815",
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
