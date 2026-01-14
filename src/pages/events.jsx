// import { motion } from "motion/react";
// import { Calendar, MapPin, Users, Clock } from "lucide-react";

// const Events = () => {
// 	const events = [
// 		{
// 			id: 1,
// 			title: "Web Development Workshop",
// 			date: "[DATE]",
// 			time: "[TIME]",
// 			location: "[LOCATION]",
// 			description: "Learn modern web development with React, Node.js, and more.",
// 			attendees: "[NUMBER]",
// 			category: "workshop",
// 			status: "upcoming"
// 		},
// 		{
// 			id: 2,
// 			title: "AI & Machine Learning Seminar",
// 			date: "[DATE]",
// 			time: "[TIME]",
// 			location: "[LOCATION]",
// 			description: "Explore the latest trends in AI and machine learning technologies.",
// 			attendees: "[NUMBER]",
// 			category: "seminar",
// 			status: "upcoming"
// 		},
// 		{
// 			id: 3,
// 			title: "Annual Hackathon",
// 			date: "[DATE]",
// 			time: "[TIME]",
// 			location: "[LOCATION]",
// 			description: "24-hour coding competition with amazing prizes and networking opportunities.",
// 			attendees: "[NUMBER]",
// 			category: "hackathon",
// 			status: "upcoming"
// 		},
// 		{
// 			id: 4,
// 			title: "Cloud Computing Basics",
// 			date: "[DATE]",
// 			time: "[TIME]",
// 			location: "[LOCATION]",
// 			description: "Introduction to AWS, Azure, and Google Cloud Platform.",
// 			attendees: "[NUMBER]",
// 			category: "workshop",
// 			status: "upcoming"
// 		},
// 		{
// 			id: 5,
// 			title: "Career Fair",
// 			date: "[DATE]",
// 			time: "[TIME]",
// 			location: "[LOCATION]",
// 			description: "Meet top tech companies and explore career opportunities.",
// 			attendees: "[NUMBER]",
// 			category: "networking",
// 			status: "upcoming"
// 		},
// 		{
// 			id: 6,
// 			title: "Cybersecurity Workshop",
// 			date: "[DATE]",
// 			time: "[TIME]",
// 			location: "[LOCATION]",
// 			description: "Learn essential cybersecurity practices and ethical hacking basics.",
// 			attendees: "[NUMBER]",
// 			category: "workshop",
// 			status: "upcoming"
// 		}
// 	];

// 	const getCategoryColor = (category) => {
// 		const colors = {
// 			workshop: "from-blue-500 to-cyan-500",
// 			seminar: "from-purple-500 to-pink-500",
// 			hackathon: "from-green-500 to-emerald-500",
// 			networking: "from-orange-500 to-red-500"
// 		};
// 		return colors[category] || "from-gray-500 to-gray-600";
// 	};

// 	return (
// 		<div className="min-h-screen dark:bg-[#e8e9cd] bg-[#020B05] text-white dark:text-gray-900 py-20 px-4">
// 			<div className="max-w-6xl mx-auto">
// 				{/* Header */}
// 				<motion.div
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5 }}
// 					className="text-center mb-16">
// 					<h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
// 						Upcoming Events
// 					</h1>
// 					<p className="text-xl text-gray-400 dark:text-gray-600">
// 						Join us for exciting workshops, seminars, and networking opportunities
// 					</p>
// 				</motion.div>

// 				{/* Events Grid */}
// 				<div className="grid md:grid-cols-2 gap-6">
// 					{events.map((event, idx) => (
// 						<motion.div
// 							key={event.id}
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.5, delay: idx * 0.1 }}
// 							whileHover={{ scale: 1.02 }}
// 							className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 dark:from-gray-100/50 dark:to-gray-200/50 border border-gray-700 dark:border-gray-300 rounded-lg p-6 hover:border-green-500/50 dark:hover:border-green-700/50 transition-all">
// 							{/* Category Badge */}
// 							<div className="flex items-start justify-between mb-4">
// 								<span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getCategoryColor(event.category)} text-white capitalize`}>
// 									{event.category}
// 								</span>
// 								<span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-500/20 dark:bg-green-700/20 text-green-400 dark:text-green-600">
// 									{event.status}
// 								</span>
// 							</div>

// 							{/* Title */}
// 							<h3 className="text-2xl font-bold mb-3">{event.title}</h3>

// 							{/* Description */}
// 							<p className="text-gray-300 dark:text-gray-700 mb-4">{event.description}</p>

// 							{/* Event Details */}
// 							<div className="space-y-2 mb-6 text-sm">
// 								<div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
// 									<Calendar size={18} className="text-green-400 dark:text-green-600" />
// 									<span>{event.date}</span>
// 								</div>
// 								<div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
// 									<Clock size={18} className="text-blue-400 dark:text-blue-600" />
// 									<span>{event.time}</span>
// 								</div>
// 								<div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
// 									<MapPin size={18} className="text-red-400 dark:text-red-600" />
// 									<span>{event.location}</span>
// 								</div>
// 								<div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
// 									<Users size={18} className="text-purple-400 dark:text-purple-600" />
// 									<span>{event.attendees} Attendees</span>
// 								</div>
// 							</div>

// 							{/* Register Button */}
// 							<button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all">
// 								Register Now
// 							</button>
// 						</motion.div>
// 					))}
// 				</div>

// 				{/* Newsletter Section */}
// 				<motion.div
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5, delay: 0.6 }}
// 					className="mt-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 dark:from-green-100/10 dark:to-blue-100/10 border border-green-500/30 dark:border-green-700/30 rounded-lg p-8 text-center">
// 					<h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
// 					<p className="text-gray-400 dark:text-gray-600 mb-6">
// 						Subscribe to our newsletter to get updates about upcoming events and opportunities.
// 					</p>
// 					<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
// 						<input
// 							type="email"
// 							placeholder="Enter your email"
// 							className="flex-1 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 focus:outline-none focus:border-green-500 dark:focus:border-green-700"
// 						/>
// 						<button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all">
// 							Subscribe
// 						</button>
// 					</div>
// 				</motion.div>
// 			</div>
// 		</div>
// 	);
// };

// export default Events;
import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { EventPreview } from "../components/Event/EventPreview";
import { allEvents } from "../utils/allEvents";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Use the clean data structure from allEvents.jsx
  const pastEvents = allEvents.past;
  const upcomingEvents = allEvents.upcoming;

  const getCategoryColor = (category) => {
    const colors = {
      workshop: "from-blue-500 to-cyan-500",
      seminar: "from-purple-500 to-pink-500",
      hackathon: "from-green-500 to-emerald-500",
      networking: "from-orange-500 to-red-500",
      recruitment: "from-indigo-500 to-purple-500",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getStatusColor = (status) => {
    return status === "completed"
      ? "bg-gray-500/20 dark:bg-gray-700/20 text-gray-400 dark:text-gray-600"
      : "bg-green-500/20 dark:bg-green-700/20 text-green-400 dark:text-green-600";
  };

  const EventCard = ({ event, idx, isPast = false }) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 dark:from-gray-100/50 dark:to-gray-200/50 border border-gray-700 dark:border-gray-300 rounded-lg p-6 hover:border-green-500/50 dark:hover:border-green-700/50 transition-all"
    >
      {/* NO IMAGES IN CARDS - as requested */}

      {/* Category Badge */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getCategoryColor(
            event.category
          )} text-white capitalize`}
        >
          {event.category}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
            event.status
          )}`}
        >
          {event.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3">{event.title}</h3>

      {/* Description */}
      <p className="text-gray-300 dark:text-gray-700 mb-4">
        {event.description}
      </p>

      {/* Event Details */}
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
          <Calendar size={18} className="text-green-400 dark:text-green-600" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
          <Clock size={18} className="text-blue-400 dark:text-blue-600" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
          <MapPin size={18} className="text-red-400 dark:text-red-600" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-600">
          <Users size={18} className="text-purple-400 dark:text-purple-600" />
          <span>{event.attendees} Attendees</span>
        </div>
      </div>

      {/* Button - Different for past events */}
      {isPast ? (
        <button
          onClick={() => setSelectedEvent(event)}
          className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-2 px-4 rounded-lg transition-all"
        >
          View Details
        </button>
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
            className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            Register Now
          </button>

          {/* View Details Button for upcoming events */}
          <button
            onClick={() => setSelectedEvent(event)}
            className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-2 px-4 rounded-lg transition-all"
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
        {/* Past Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Past Events
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-600">
            Relive our previous successful events and workshops
          </p>
        </motion.div>

        {/* Past Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {pastEvents.map((event, idx) => (
            <EventCard key={event.id} event={event} idx={idx} isPast={true} />
          ))}
        </div>

        {/* Upcoming Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-600">
            Join us for exciting workshops, seminars, and networking
            opportunities
          </p>
        </motion.div>

        {/* Upcoming Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, idx) => (
            <EventCard key={event.id} event={event} idx={idx} isPast={false} />
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
          <p className="text-gray-400 dark:text-gray-600 mb-6">
            Subscribe to our newsletter to get updates about upcoming events and
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 focus:outline-none focus:border-green-500 dark:focus:border-green-700"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Event Preview Modal */}
      {selectedEvent && (
        <EventPreview
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;
