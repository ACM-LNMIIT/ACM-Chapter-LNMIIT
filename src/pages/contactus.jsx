import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: [
        "23ucc620@lnmiit.ac.in",
        "23ucs752@lnmiit.ac.in",
        "23ucc569@lnmiit.ac.in"
      ],
      desc: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: ["+91 88406 57829", "+91 82871 15049", "+91 96537 23589"],
      desc: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "LNMIIT, Jaipur, Rajasthan",
      desc: "Visit us at our campus"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020B05] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 primary-gradient-text">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Have questions or ideas? Reach out to the ACM team.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-gray-900 border border-gray-800 p-6 rounded-lg text-center hover:border-blue-400 transition"
              >
                <Icon size={36} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>

                <div className="text-gray-300 text-sm space-y-1 mb-2">
                  {Array.isArray(info.value)
                    ? info.value.map((v, i) => <p key={i}>{v}</p>)
                    : <p>{info.value}</p>}
                </div>

                <p className="text-gray-400 text-sm">{info.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-semibold mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            {/* Location Header with Emoji */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl">📍</span>
              <h3 className="text-xl font-semibold">
                Our Location
              </h3>
            </div>

            {/* Map pushed slightly down */}
            <div className="mt-4 w-full h-[500px] rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=LNMIIT%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                title="LNMIIT Location"
              />
            </div>
          </div>
        </motion.div>

        {/* Office Hours */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">
            Office Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-1">Weekdays</h3>
              <p className="text-gray-400">9:00 AM – 5:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Weekends</h3>
              <p className="text-gray-400">Closed</p>
            </div>
          </div>
        </motion.div> */}

      </div>
    </div>
  );
};

export default ContactUs;
