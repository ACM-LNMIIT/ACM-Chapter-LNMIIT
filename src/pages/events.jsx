import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Clock, Download } from "lucide-react";
import { EventPreview } from "../components/Event/EventPreview";
import { allEvents } from "../utils/allEvents";
// Import your PDF hook
import { usePdfGenerator } from "../components/hookPDF";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { downloadPdf } = usePdfGenerator(); // Use your PDF hook

  // Check for dark mode on mount and listen for changes
  useEffect(() => {
    // Initial check
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for your custom themeChange event from NavBar
    const handleThemeChange = (event) => {
      setIsDarkMode(event.detail.isDark);
    };

    window.addEventListener("themeChange", handleThemeChange);

    // Also listen for DOM changes (as backup)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  // Use the clean data structure from allEvents.jsx
  const pastEvents = allEvents.past;
  const upcomingEvents = allEvents.upcoming;

  const getCategoryColor = (category, isPast = false) => {
    // If it's a past event, use gray color
    if (isPast) {
      return "bg-gray-500 text-white";
    }

    // For upcoming events: solid blue for all categories
    return "bg-blue-600 text-white";
  };

  const getStatusColor = (status) => {
    return status === "completed"
      ? "bg-gray-500/20 dark:bg-gray-700/20 text-gray-400 dark:text-gray-600"
      : "bg-green-500/20 dark:bg-green-700/20 text-green-400 dark:text-green-600";
  };

  const handleDownloadPDF = (event) => {
    // Generate a filename from the event title
    const fileName = `acm-${event.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

    // Download the PDF using your hook
    downloadPdf(event, "event", fileName);
  };

  // Color configurations for titles
  const titleColors = {
    upcoming: {
      dark: "text-blue-600", // Solid blue for light mode
      light: "text-blue-300", // Solid purple for dark mode
    },
    past: {
      light: "text-gray-400", // Darker gray for light mode
      dark: "text-gray-700", // Lighter gray for dark mode
    },
  };

  const EventCard = ({ event, idx, isPast = false }) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 dark:from-gray-100/50 dark:to-gray-200/50 border border-gray-700 dark:border-gray-300 rounded-lg p-10 hover:border-green-500/50 dark:hover:border-green-700/50 transition-all"
    >
      {/* NO IMAGES IN CARDS - as requested */}

      {/* Category Badge */}
      <div className="flex justify-between mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
            event.category,
            isPast,
          )} capitalize`}
        >
          {event.category}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
            event.status,
          )}`}
        >
          {event.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="h-1/6 text-2xl font-bold mb-3">{event.title}</h3>

      {/* Description - Increased boldness slightly (500 instead of 400) */}
      <p className="h-1/6 text-gray-300 dark:text-gray-700 mb-4 font-medium">
        {event.description}
      </p>

      {/* Event Details - Increased boldness slightly */}
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600 font-medium">
          <Calendar size={18} className="text-green-400 dark:text-green-600" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600 font-medium">
          <Clock size={18} className="text-blue-400 dark:text-blue-600" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600 font-medium">
          <MapPin size={18} className="text-red-400 dark:text-red-600" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600 font-medium">
          <Users size={18} className="text-purple-400 dark:text-purple-600" />
          <span>{event.attendees} Attendees</span>
        </div>
      </div>

      {/* Button - Different for past events */}
      {isPast ? (
        <div className="flex flex-col sm:flex-row gap-3">
          {/* View Details Button */}
          <button
            onClick={() => setSelectedEvent(event)}
            className="flex-1 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            View Details
          </button>

          {/* Download PDF Button for past events */}
          <button
            onClick={() => handleDownloadPDF(event)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Register Now Button */}
          <button
            onClick={() => {
              if (event.registrationLink && event.registrationLink !== "#") {
                window.open(event.registrationLink, "_blank");
              } else {
                alert("Registration link will be available soon!");
              }
            }}
            className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            Register Now
          </button>

          {/* View Details Button for upcoming events */}
          <button
            onClick={() => setSelectedEvent(event)}
            className="flex-1 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            View Details
          </button>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen dark:bg-[#e8e9cd] bg-[#020B05] text-white dark:text-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Upcoming Events Section - MOVED TO TOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              isDarkMode
                ? titleColors.upcoming.dark
                : titleColors.upcoming.light
            }`}
          >
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-600 font-medium">
            Join us for exciting workshops, seminars, and networking
            opportunities
          </p>
        </motion.div>

        {/* Upcoming Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {upcomingEvents.map((event, idx) => (
            <EventCard key={event.id} event={event} idx={idx} isPast={false} />
          ))}
        </div>

        {/* Past Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              isDarkMode ? titleColors.past.dark : titleColors.past.light
            }`}
          >
            Past Events
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-600 font-medium">
            Relive our previous successful events and workshops
          </p>
        </motion.div>

        {/* Past Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map((event, idx) => (
            <EventCard key={event.id} event={event} idx={idx} isPast={true} />
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 dark:from-green-100/10 dark:to-blue-100/10 border border-green-500/30 dark:border-green-700/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-gray-400 dark:text-gray-600 mb-6 font-medium">
            Subscribe to our newsletter to get updates about upcoming events and
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 focus:outline-none focus:border-green-500 dark:focus:border-green-700 font-medium"
            />
            <button className="px-6 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white font-bold rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Event Preview Modal - Update to include PDF download */}
      {selectedEvent && (
        <EventPreview
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onDownloadPDF={() => handleDownloadPDF(selectedEvent)}
        />
      )}
    </div>
  );
};

export default Events;
