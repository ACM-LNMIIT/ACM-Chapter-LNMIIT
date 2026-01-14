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
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value:["23ucc620@lnmiit.ac.in","23ucs752@lnmiit.ac.in","23ucc569@lnmit.ac.in"],
			desc: "Send us an email anytime"
		},
		{
			icon: Phone,
			title: "Phone",
			value: ["+91 88406 57829", "+91 82871 15049" , "+91 96537 23589"],
			desc: "Call us during business hours"
		},
		{
			icon: MapPin,
			title: "Location",
			value: "Rupa-ki-Nangal ,Post:Sumel ,Via:Jamdoli , Jaipur-302031, Rajasthan, India",
			desc: "Visit us at our office"
		}
	];

	return (
		<div className="min-h-screen dark:bg-[#e8e9cd] bg-[#020B05] text-white dark:text-gray-900 py-20 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
						Get In Touch
					</h1>
					<p className="text-xl text-gray-400 dark:text-gray-600">
						We'd love to hear from you. Send us a message!
					</p>
				</motion.div>

				{/* Contact Info Cards */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="grid md:grid-cols-3 gap-6 mb-16">
					{contactInfo.map((info, idx) => {
						const Icon = info.icon;
						return (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.05 }}
								className="bg-gradient-to-br from-green-900/20 to-blue-900/20 dark:from-green-100/10 dark:to-blue-100/10 p-6 rounded-lg border border-green-500/30 dark:border-green-700/30 text-center">
								<Icon size={40} className="mx-auto mb-4 text-green-400 dark:text-green-600" />
								<h3 className="text-xl font-bold mb-2">{info.title}</h3>
								<div className="text-green-400 dark:text-green-600 font-semibold mb-2 space-y-1">
									{Array.isArray(info.value) ? (
										info.value.map((mail, i) => (
										<p key={i}>{mail}</p>
										))
									) : (
										<p>{info.value}</p>
									)}
								</div>
								<p className="text-gray-400 dark:text-gray-600 text-sm">{info.desc}</p>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="grid md:grid-cols-2 gap-8 mb-16">
					{/* Form */}
					<div className="bg-gray-900/50 dark:bg-gray-100/50 p-8 rounded-lg border border-gray-800 dark:border-gray-300">
						<h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block text-sm font-semibold mb-2">Name</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your name"
									className="w-full px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 focus:outline-none focus:border-green-500 dark:focus:border-green-700"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold mb-2">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="your@email.com"
									className="w-full px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 focus:outline-none focus:border-green-500 dark:focus:border-green-700"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold mb-2">Subject</label>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder="Message subject"
									className="w-full px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 focus:outline-none focus:border-green-500 dark:focus:border-green-700"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-semibold mb-2">Message</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your message..."
									rows="5"
									className="w-full px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 focus:outline-none focus:border-green-500 dark:focus:border-green-700 resize-none"
									required
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
								<Send size={18} />
								Send Message
							</button>
						</form>
					</div>

					{/* Map Placeholder */}
					<div className="bg-gray-900/50 dark:bg-gray-100/50 p-8 rounded-lg border border-gray-800 dark:border-gray-300 flex items-center justify-center">
						<div className="text-center">
							<MapPin size={64} className="mx-auto mb-4 text-green-400 dark:text-green-600" />
							<h3 className="text-2xl font-bold mb-2">Our Location</h3>
							<p className="text-gray-400 dark:text-gray-600 mb-4">
								Rupa-ki-Nangal ,Post:Sumel ,Via:Jamdoli , Jaipur-302031, Rajasthan, India
							</p>
							<p className="text-gray-500 dark:text-gray-500 text-sm">
								Map integration coming soon
							</p>
						</div>
					</div>
				</motion.div>

				{/* Office Hours */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 dark:from-purple-100/10 dark:to-pink-100/10 p-8 rounded-lg border border-purple-500/30 dark:border-purple-700/30 text-center">
					<h2 className="text-2xl font-bold mb-6">Office Hours</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="font-bold text-lg mb-2">Weekdays</h3>
							<p className="text-gray-400 dark:text-gray-600">[9:00 AM] - [5:00 PM]</p>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-2">Weekends</h3>
							<p className="text-gray-400 dark:text-gray-600">Holiday</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ContactUs;
