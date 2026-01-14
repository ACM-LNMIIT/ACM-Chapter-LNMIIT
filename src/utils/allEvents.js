// Import all images
import acmSpeaker from "../assets/acmSpeaker.jpeg";
import bigORush from "../assets/bigORush.jpeg";
import codeQuest from "../assets/codeQuest.jpeg";
import orientation from "../assets/orientation.jpeg";
import recruit from "../assets/recruit.jpeg";

// Import upcoming event posters
import bor2 from "../assets/bor2.JPEG";
import insightX from "../assets/insightX.JPEG";
import promptWars from "../assets/promptWars.JPEG";

export const allEvents = {
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
      popupImage: orientation,
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
      popupImage: acmSpeaker,
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
      popupImage: codeQuest,
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
      popupImage: bigORush,
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
      popupImage: recruit,
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
      date: "15/02/2025",
      time: "2:00 PM",
      location: "LT-05, LNMIIT",
      description:
        "The sequel to our popular coding treasure hunt! Big O Rush returns with more challenges, puzzles, and exciting prizes.",
      attendees: "100+",
      category: "hackathon",
      status: "upcoming",
      popupImage: bor2,
      registrationLink: "#register-bor2",
    },
    {
      id: 7,
      title: "InsightX: Data Science Workshop",
      date: "20/02/2025",
      time: "3:00 PM",
      location: "Data Lab, CS Department",
      description:
        "Hands-on workshop on data visualization, analysis, and machine learning techniques using Python and modern data science tools.",
      attendees: "60",
      category: "workshop",
      status: "upcoming",
      popupImage: insightX,
      registrationLink: "#register-insightx",
    },
    {
      id: 8,
      title: "Prompt Wars: AI Prompt Engineering Challenge",
      date: "25/02/2025",
      time: "10:00 AM",
      location: "AI Lab, LNMIIT",
      description:
        "Competition to craft the most effective AI prompts. Test your skills against Large Language Models and win exciting prizes.",
      attendees: "80",
      category: "workshop",
      status: "upcoming",
      popupImage: promptWars,
      registrationLink: "#register-promptwars",
    },
  ],
};

// Helper functions
export const getPastEvents = () => allEvents.past;
export const getUpcomingEvents = () => allEvents.upcoming;
export const getAllEvents = () => [...allEvents.past, ...allEvents.upcoming];
