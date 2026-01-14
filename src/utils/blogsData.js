// import image1 from "../assets/img2.png";

// export const blogsData = [
// 	{
// 		id: 1,
// 		title: "Getting Started with React",
// 		description:
// 			"Begin your journey with React by understanding its core principles and learning how to create your first component with ease.",
// 		thumbnail: image1,
// 		pdfLink: "/pdfs/react-basics.pdf",
// 		date: "2024-11-15",
// 		content: {
// 			heading: "Getting Started with React",
// 			intro:
// 				"React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage state efficiently.",
// 			subheading: "Creating Your First Component",
// 			mainContent:
// 				"Components are the building blocks of React applications. They are reusable pieces of code that return React elements describing what should appear on the screen.",
// 			codeExample: `// Your first React component
// function HelloWorld() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>Welcome to React!</p>
//     </div>
//   );
// }

// export default HelloWorld;`,
// 			quote: "Learn once, write anywhere.",
// 			applications: [
// 				"Single Page Applications",
// 				"Mobile apps with React Native",
// 				"Progressive Web Apps",
// 				"Interactive UIs",
// 			],
// 		},
// 	},
// 	{
// 		id: 2,
// 		title: "Advanced CSS Techniques",
// 		description:
// 			"Unlock the full potential of CSS with advanced layout systems and design patterns that enhance your website’s appearance and user experience.",
// 		thumbnail: image1,
// 		pdfLink: "/pdfs/advanced-css.pdf",
// 		date: "2024-12-03",
// 		content: {
// 			heading: "Advanced CSS Techniques",
// 			intro:
// 				"Modern CSS offers powerful features that enable developers to create complex layouts and stunning visual effects with less code.",
// 			subheading: "CSS Grid and Flexbox",
// 			mainContent:
// 				"CSS Grid and Flexbox provide powerful layout systems that make it easier to design complex web layouts. They work together to solve different layout problems.",
// 			codeExample: `/* CSS Grid example */
// .grid-container {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   grid-gap: 1rem;
// }

// /* Flexbox example */
// .flex-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }`,
// 			quote: "Good design is as little design as possible.",
// 			applications: [
// 				"Responsive layouts",
// 				"Card-based designs",
// 				"Magazine-style layouts",
// 				"Complex animations",
// 			],
// 		},
// 	},
// 	{
// 		id: 3,
// 		title: "JavaScript Best Practices",
// 		description:
// 			"Improve your JavaScript skills by adopting industry-standard best practices that lead to cleaner, more maintainable, and scalable code.",
// 		thumbnail: image1,
// 		pdfLink: "/pdfs/js-best-practices.pdf",
// 		date: "2025-01-10",
// 		content: {
// 			heading: "JavaScript Best Practices",
// 			intro:
// 				"Writing clean, maintainable JavaScript code is essential for building robust applications that can scale and evolve over time.",
// 			subheading: "Modern JavaScript Features",
// 			mainContent:
// 				"ES6+ introduced many features that make JavaScript code more readable and maintainable, such as arrow functions, destructuring, and template literals.",
// 			codeExample: `// Using modern JavaScript features
// // Arrow functions
// const multiply = (a, b) => a * b;

// // Destructuring
// const { name, age } = person;

// // Template literals
// const greeting = \`Hello, \${name}! You are \${age} years old.\`;`,
// 			quote:
// 				"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
// 			applications: [
// 				"Code organization",
// 				"Error handling",
// 				"Performance optimization",
// 				"Security best practices",
// 			],
// 		},
// 	},
// 	{
// 		id: 4,
// 		title: "Introduction to Next.js",
// 		description:
// 			"Explore the power of Next.js and learn how it simplifies the development of server-rendered and statically generated React applications.",
// 		thumbnail: image1,
// 		pdfLink: "/pdfs/nextjs-intro.pdf",
// 		date: "2025-02-05",
// 		content: {
// 			heading: "Introduction to Next.js",
// 			intro:
// 				"Next.js is a React framework that enables server-side rendering, static site generation, and other powerful features with minimal configuration.",
// 			subheading: "Key Features of Next.js",
// 			mainContent:
// 				"Next.js provides features like file-based routing, API routes, and built-in CSS support that make it easier to build production-ready React applications.",
// 			codeExample: `// Basic Next.js page component
// // pages/index.js
// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to Next.js!</h1>
//       <p>This is a server-rendered page.</p>
//     </div>
//   )
// }`,
// 			quote: "The React Framework for Production",
// 			applications: [
// 				"E-commerce sites",
// 				"Blogs",
// 				"Marketing websites",
// 				"Dashboards",
// 			],
// 		},
// 	},
// 	{
// 		id: 5,
// 		title: "Responsive Web Design",
// 		description:
// 			"Master the essentials of responsive design and build websites that deliver consistent user experiences across devices and screen sizes.",
// 		thumbnail: image1,
// 		pdfLink: "/pdfs/responsive-design.pdf",
// 		date: "2025-03-01",
// 		content: {
// 			heading: "Responsive Web Design",
// 			intro:
// 				"Responsive web design ensures that your website looks and functions well on any device, from desktop computers to mobile phones.",
// 			subheading: "Mobile-First Approach",
// 			mainContent:
// 				"The mobile-first approach means designing for mobile devices first, then progressively enhancing the design for larger screens.",
// 			codeExample: `/* Mobile-first media queries */
// /* Base styles for mobile */
// .container {
//   width: 100%;
//   padding: 1rem;
// }

// /* Tablet styles */
// @media (min-width: 768px) {
//   .container {
//     padding: 2rem;
//   }
// }

// /* Desktop styles */
// @media (min-width: 1024px) {
//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//   }
// }`,
// 			quote:
// 				"Design is not just what it looks like and feels like. Design is how it works.",
// 			applications: [
// 				"Fluid layouts",
// 				"Responsive images",
// 				"Touch-friendly interfaces",
// 				"Accessible designs",
// 			],
// 		},
// 	},
// 	{
// 		id: 6,
// 		title: "Web Accessibility Guidelines",
// 		description:
// 			"Learn how to make your websites inclusive and accessible by following established guidelines and implementing key accessibility features.",
// 		thumbnail: image1,
// 		pdfLink: "/pdfs/accessibility.pdf",
// 		date: "2025-03-18",
// 		content: {
// 			heading: "Web Accessibility Guidelines",
// 			intro:
// 				"Web accessibility ensures that websites and applications are usable by people with disabilities, providing equal access to information and functionality.",
// 			subheading: "WCAG Principles",
// 			mainContent:
// 				"The Web Content Accessibility Guidelines (WCAG) are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).",
// 			codeExample: `<!-- Accessible form example -->
// <form>
//   <div>
//     <label for="name">Name:</label>
//     <input 
//       type="text" 
//       id="name" 
//       aria-required="true"
//       aria-describedby="name-help"
//     />
//     <p id="name-help">Please enter your full name</p>
//   </div>
//   <button type="submit">Submit</button>
// </form>`,
// 			quote:
// 				"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.",
// 			applications: [
// 				"Screen reader compatibility",
// 				"Keyboard navigation",
// 				"Color contrast",
// 				"Alternative text for images",
// 			],
// 		},
// 	},
// ];
import css from "../assets/css.png";
import javascript from "../assets/javascript.jpg";
import nextjs from "../assets/nextjs.png";
import accessibility from "../assets/pour-accessibility-principles.png";
import react from "../assets/react.png";
import webDesign from "../assets/webDesign.jpg";

export const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Begin your journey with React by understanding its core principles and learning how to create your first component with ease.",
    thumbnail: react,
    pdfLink: "/pdfs/react-basics.pdf",
    date: "2024-11-15",
    content: {
      heading: "Getting Started with React",
      intro:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage state efficiently.",
      subheading: "Creating Your First Component",
      mainContent:
        "Components are the building blocks of React applications. They are reusable pieces of code that return React elements describing what should appear on the screen.",
      codeExample: `// Your first React component
function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to React!</p>
    </div>
  );
}

export default HelloWorld;`,
      quote: "Learn once, write anywhere.",
      applications: [
        "Single Page Applications",
        "Mobile apps with React Native",
        "Progressive Web Apps",
        "Interactive UIs",
      ],
    },
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    description:
      "Unlock the full potential of CSS with advanced layout systems and design patterns that enhance your website's appearance and user experience.",
    thumbnail: css,
    pdfLink: "/pdfs/advanced-css.pdf",
    date: "2024-12-03",
    content: {
      heading: "Advanced CSS Techniques",
      intro:
        "Modern CSS offers powerful features that enable developers to create complex layouts and stunning visual effects with less code.",
      subheading: "CSS Grid and Flexbox",
      mainContent:
        "CSS Grid and Flexbox provide powerful layout systems that make it easier to design complex web layouts. They work together to solve different layout problems.",
      codeExample: `/* CSS Grid example */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

/* Flexbox example */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
      quote: "Good design is as little design as possible.",
      applications: [
        "Responsive layouts",
        "Card-based designs",
        "Magazine-style layouts",
        "Complex animations",
      ],
    },
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    description:
      "Improve your JavaScript skills by adopting industry-standard best practices that lead to cleaner, more maintainable, and scalable code.",
    thumbnail: javascript,
    pdfLink: "/pdfs/js-best-practices.pdf",
    date: "2025-01-10",
    content: {
      heading: "JavaScript Best Practices",
      intro:
        "Writing clean, maintainable JavaScript code is essential for building robust applications that can scale and evolve over time.",
      subheading: "Modern JavaScript Features",
      mainContent:
        "ES6+ introduced many features that make JavaScript code more readable and maintainable, such as arrow functions, destructuring, and template literals.",
      codeExample: `// Using modern JavaScript features
// Arrow functions
const multiply = (a, b) => a * b;

// Destructuring
const { name, age } = person;

// Template literals
const greeting = \`Hello, \${name}! You are \${age} years old.\`;`,
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      applications: [
        "Code organization",
        "Error handling",
        "Performance optimization",
        "Security best practices",
      ],
    },
  },
  {
    id: 4,
    title: "Introduction to Next.js",
    description:
      "Explore the power of Next.js and learn how it simplifies the development of server-rendered and statically generated React applications.",
    thumbnail: nextjs,
    pdfLink: "/pdfs/nextjs-intro.pdf",
    date: "2025-02-05",
    content: {
      heading: "Introduction to Next.js",
      intro:
        "Next.js is a React framework that enables server-side rendering, static site generation, and other powerful features with minimal configuration.",
      subheading: "Key Features of Next.js",
      mainContent:
        "Next.js provides features like file-based routing, API routes, and built-in CSS support that make it easier to build production-ready React applications.",
      codeExample: `// Basic Next.js page component
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a server-rendered page.</p>
    </div>
  )
}`,
      quote: "The React Framework for Production",
      applications: [
        "E-commerce sites",
        "Blogs",
        "Marketing websites",
        "Dashboards",
      ],
    },
  },
  {
    id: 5,
    title: "Responsive Web Design",
    description:
      "Master the essentials of responsive design and build websites that deliver consistent user experiences across devices and screen sizes.",
    thumbnail: webDesign,
    pdfLink: "/pdfs/responsive-design.pdf",
    date: "2025-03-01",
    content: {
      heading: "Responsive Web Design",
      intro:
        "Responsive web design ensures that your website looks and functions well on any device, from desktop computers to mobile phones.",
      subheading: "Mobile-First Approach",
      mainContent:
        "The mobile-first approach means designing for mobile devices first, then progressively enhancing the design for larger screens.",
      codeExample: `/* Mobile-first media queries */
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}`,
      quote:
        "Design is not just what it looks like and feels like. Design is how it works.",
      applications: [
        "Fluid layouts",
        "Responsive images",
        "Touch-friendly interfaces",
        "Accessible designs",
      ],
    },
  },
  {
    id: 6,
    title: "Web Accessibility Guidelines",
    description:
      "Learn how to make your websites inclusive and accessible by following established guidelines and implementing key accessibility features.",
    thumbnail: accessibility,
    pdfLink: "/pdfs/accessibility.pdf",
    date: "2025-03-18",
    content: {
      heading: "Web Accessibility Guidelines",
      intro:
        "Web accessibility ensures that websites and applications are usable by people with disabilities, providing equal access to information and functionality.",
      subheading: "WCAG Principles",
      mainContent:
        "The Web Content Accessibility Guidelines (WCAG) are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).",
      codeExample: `<!-- Accessible form example -->
<form>
  <div>
    <label for="name">Name:</label>
    <input 
      type="text" 
      id="name" 
      aria-required="true"
      aria-describedby="name-help"
    />
    <p id="name-help">Please enter your full name</p>
  </div>
  <button type="submit">Submit</button>
</form>`,
      quote:
        "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.",
      applications: [
        "Screen reader compatibility",
        "Keyboard navigation",
        "Color contrast",
        "Alternative text for images",
      ],
    },
  },
];