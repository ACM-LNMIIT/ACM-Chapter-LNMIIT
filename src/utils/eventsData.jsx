import acmSpeaker from "../assets/acmSpeaker.jpeg";
import bigORush from "../assets/bigORush.png";
import codeQuest from "../assets/codeQuest.png";
import orientation from "../assets/orientation.jpeg";
import recruit from "../assets/recruit.jpeg";

export const eventsData = [
  {
    id: 1,
    title: "ACM Domains Orientation and Recruitment",
    description:
      "Introduced prospective members to the various domains of the ACM Student Chapter LNMIIT, outlined responsibilities, and initiated the recruitment process.",
    thumbnail: orientation,
    pdfLink: "/pdfs/acm-orientation.pdf",
    date: "2024-09-14",
    content: {
      heading: "ACM Domains Orientation and Recruitment",
      intro:
        "The ACM Student Chapter LNMIIT organized an orientation event to introduce prospective members to various technical domains and kickstart the recruitment process.",
      subheading: "Event Highlights",
      mainContent:
        "This in-house event provided an overview of different ACM domains including web development, competitive programming, AI/ML, and cybersecurity. Members learned about responsibilities and opportunities within the chapter.",
      codeExample: `// Sample code demonstration during orientation
function joinACM(student) {
  return {
    status: "registered",
    domains: ["Web Dev", "CP", "AI/ML"],
    opportunities: ["Workshops", "Hackathons", "Networking"]
  };
}`,
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
    description:
      "Talk by Dr. Sriparna Saha (IIT Patna) on AI in Digital Health, covering advancements in healthcare AI and applications of LLMs in diagnostics and patient care.",
    thumbnail: acmSpeaker,
    pdfLink: "/pdfs/ai-digital-health.pdf",
    date: "2024-11-05",
    content: {
      heading: "Distinguished Speaker Talk - AI in Digital Health",
      intro:
        "Dr. Sriparna Saha from IIT Patna delivered an insightful talk on the transformative role of artificial intelligence in modern healthcare systems.",
      subheading: "AI and Healthcare Innovation",
      mainContent:
        "The session covered cutting-edge applications of Large Language Models (LLMs) and multimodal techniques in medical diagnostics, patient care, and healthcare analytics. Attendees gained insights into real-world AI implementations in digital health.",
      codeExample: `# AI in Healthcare - Conceptual Implementation
import healthcare_ai

def diagnose_patient(symptoms, medical_history):
    model = healthcare_ai.load_llm_model()
    diagnosis = model.predict(symptoms, medical_history)
    return diagnosis.recommendations`,
      quote: "AI is revolutionizing healthcare, making diagnostics faster and more accurate.",
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
    description:
      "Competitive coding contest featuring algorithmic and problem-solving challenges for Y22, Y23, and Y24 batches, with rewards for top performers.",
    thumbnail: codeQuest,
    pdfLink: "/pdfs/codequest.pdf",
    date: "2024-11-20",
    content: {
      heading: "CodeQuest - The Ultimate Coding Challenge",
      intro:
        "CodeQuest brought together coding enthusiasts from multiple batches for an intense competitive programming competition with a prize pool of ₹8000.",
      subheading: "Competition Format",
      mainContent:
        "Participants tackled algorithmic challenges testing data structures, dynamic programming, and problem-solving skills. The online format allowed students to compete from anywhere, with top performers receiving cash prizes.",
      codeExample: `// Sample competitive programming problem
function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}`,
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
    description:
      "A hybrid event merging coding challenges with a treasure hunt across four competitive rounds, testing problem-solving, aptitude, and campus exploration skills.",
    thumbnail: bigORush,
    pdfLink: "/pdfs/big-o-rush.pdf",
    date: "2025-04-08",
    content: {
      heading: "Big O Rush - Code Hunt",
      intro:
        "Big O Rush combined the thrill of competitive coding with an adventurous treasure hunt across the LNMIIT campus, creating a unique hackathon-style experience.",
      subheading: "Multi-Round Challenge",
      mainContent:
        "Teams of 2-4 members navigated through four competitive rounds featuring coding puzzles, aptitude challenges, and campus exploration tasks. The event culminated in a CTF-style final round with prizes including gaming keyboards, wireless earbuds, and Ferrero Rocher.",
      codeExample: `// CTF-style puzzle example
function solveCTFChallenge(clue, teamPosition) {
  const decoded = decryptClue(clue);
  const nextLocation = findNextCheckpoint(decoded, teamPosition);
  
  return {
    location: nextLocation,
    challenge: generateCodePuzzle(),
    points: calculateScore(timeElapsed)
  };
}`,
      quote: "The Winning Team Doesn't Just Celebrate—Everyone Takes Home a Prize!",
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
    description:
      "Recruitment drive aimed at onboarding enthusiastic and skilled members from the Y-24 batch into the ACM LNMIIT Student Chapter.",
    thumbnail: recruit,
    pdfLink: "/pdfs/y24-recruitment.pdf",
    date: "2025-08-11",
    content: {
      heading: "Recruitment for Y-24 Batch",
      intro:
        "The ACM LNMIIT Student Chapter conducted an extensive online recruitment drive to welcome fresh talent from the Y-24 batch into the community.",
      subheading: "Selection Process",
      mainContent:
        "The week-long recruitment process evaluated candidates based on technical skills, problem-solving abilities, and enthusiasm for technology. Successful candidates joined various domains including web development, competitive programming, and AI/ML.",
      codeExample: `// Recruitment portal code snippet
const recruitmentProcess = {
  duration: "11/08/2025 - 17/08/2025",
  mode: "online",
  
  evaluateCandidates: function(applications) {
    return applications
      .filter(app => app.technical_skills >= 70)
      .filter(app => app.problem_solving >= 70)
      .map(app => ({
        name: app.name,
        domain: assignDomain(app.interests),
        status: "selected"
      }));
  }
};`,
      quote: "We Are Recruiting - Join the ACM LNMIIT Family",
      applications: [
        "Member onboarding",
        "Skill assessment",
        "Domain allocation",
        "Community expansion",
      ],
    },
  },
];