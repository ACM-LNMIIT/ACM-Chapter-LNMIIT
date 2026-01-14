import {
  X,
  FileText,
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  Image,
} from "lucide-react";
import { Button } from "../ui/button";

export function EventPreview({ event, onClose }) {
  if (!event) return null;

  const isPastEvent = event.status === "completed";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl border border-gray-700">
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Event Poster/Image - WITH FALLBACK */}
          {event.popupImage ? (
            <div className="relative h-80 w-full overflow-hidden rounded-t-2xl">
              <img
                src={event.popupImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            </div>
          ) : (
            // Fallback for events without images
            <div className="relative h-48 w-full bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex flex-col items-center justify-center rounded-t-2xl p-4">
              <Image className="h-12 w-12 text-white/60 mb-2" />
              <span className="text-white text-2xl font-bold text-center">
                {event.title}
              </span>
              <span className="text-white/70 text-sm mt-1">
                {isPastEvent ? "Past Event" : "Upcoming Event"}
              </span>
            </div>
          )}

          {/* Rest of the component remains the same as before */}
          <div className="p-6">
            {/* Event Title and Status */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-3xl font-bold text-white">{event.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    isPastEvent
                      ? "bg-gray-500/20 text-gray-300"
                      : "bg-green-500/20 text-green-300"
                  }`}
                >
                  {event.status}
                </span>
              </div>
              <p className="text-gray-300 text-lg">{event.description}</p>
            </div>

            {/* Event Details Card */}
            <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
              <h3 className="text-orange-400 text-lg font-semibold mb-3">
                Event Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {event.date && (
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-green-400" />
                    <div>
                      <span className="text-gray-400 text-sm">Date</span>
                      <p className="text-white">{event.date}</p>
                    </div>
                  </div>
                )}
                {event.time && (
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <div>
                      <span className="text-gray-400 text-sm">Time</span>
                      <p className="text-white">{event.time}</p>
                    </div>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-red-400" />
                    <div>
                      <span className="text-gray-400 text-sm">Location</span>
                      <p className="text-white">{event.location}</p>
                    </div>
                  </div>
                )}
                {event.attendees && (
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-purple-400" />
                    <div>
                      <span className="text-gray-400 text-sm">Attendees</span>
                      <p className="text-white">{event.attendees}</p>
                    </div>
                  </div>
                )}
                {event.category && (
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Category</span>
                      <p className="text-white capitalize">{event.category}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* PAST EVENT: Detailed Content */}
            {isPastEvent && event.content && (
              <div className="mb-6 p-6 bg-gray-800/50 rounded-md">
                <article className="prose prose-invert max-w-none">
                  <h1 className="text-orange-400 text-2xl font-bold mb-4">
                    {event.content.heading}
                  </h1>
                  <p className="text-base leading-relaxed mb-4 text-gray-300">
                    {event.content.intro}
                  </p>

                  <h2 className="text-orange-400 text-xl font-semibold mb-3">
                    {event.content.subheading}
                  </h2>
                  <p className="leading-relaxed mb-6 text-gray-300">
                    {event.content.mainContent}
                  </p>

                  <blockquote className="border-l-4 border-orange-400 pl-4 py-3 my-6 bg-gray-800/30 rounded-r-md">
                    <p className="italic text-lg text-white">
                      "{event.content.quote}"
                    </p>
                  </blockquote>

                  <h3 className="text-orange-400 text-lg font-semibold mb-4">
                    Key Highlights
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {event.content.applications.map((item, index) => (
                      <li key={index} className="text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            )}

            {/* UPCOMING EVENT: Registration Info */}
            {!isPastEvent && (
              <div className="mb-6 p-6 bg-green-900/20 rounded-md border border-green-500/30">
                <h3 className="text-green-400 text-xl font-semibold mb-3">
                  Ready to Join?
                </h3>
                <p className="text-gray-300 mb-4">
                  Don't miss this exciting opportunity! Register now to secure
                  your spot.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-gray-300">
                      Networking with industry experts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-gray-300">
                      Hands-on learning experience
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-gray-300">
                      Certificate of participation
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              {isPastEvent ? (
                // Past Event: Download PDF
                <a href={event.pdfLink} className="w-full sm:w-auto" download>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all">
                    <FileText className="h-5 w-5" />
                    <span>Download Event PDF</span>
                  </Button>
                </a>
              ) : (
                // Upcoming Event: Register Now
                <a
                  href={event.registrationLink || "#"}
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all">
                    <ExternalLink className="h-5 w-5" />
                    <span>Register Now</span>
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
