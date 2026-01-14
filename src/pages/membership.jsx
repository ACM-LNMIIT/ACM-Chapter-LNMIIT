import { motion } from "motion/react";
import { Check } from "lucide-react";

const Membership = () => {
	const plans = [
		{
			name: "Student",
			price: "₹ 1450",
			period: "per year",
			description: "Perfect for students",
			link:"https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD#error-msg",
			features: [
				"Access to all events and workshops",
				"Networking opportunities",
				"Member discounts",
				"Digital resources and materials",
				"Community forum access"
			],
			highlighted: false
		},
		{
			name: "Professional",
			price: "$ 99",
			period: "per year",
			description: "For working professionals",
			link:"https://services.acm.org/public/qj/profqj/qjprof_control.cfm?form_type=Professional",
			features: [
				"All Student benefits",
				"Priority event registration",
				"Career development resources",
				"Job board access",
				"Mentorship program",
				"Professional certification prep"
			],
			highlighted: true
		},
	];

	const benefits = [
		{ icon: "🎓", title: "Education", desc: "Access to workshops and training" },
		{ icon: "🤝", title: "Networking", desc: "Connect with industry professionals" },
		{ icon: "💼", title: "Career", desc: "Job opportunities and mentorship" },
		{ icon: "📚", title: "Resources", desc: "Exclusive learning materials" },
		{ icon: "🎉", title: "Events", desc: "Attend exclusive member events" },
		{ icon: "🏆", title: "Recognition", desc: "Showcase your achievements" }
	];

	return (
		<div className="min-h-screen dark:bg-[#e8e9cd] bg-[#020B05] text-white dark:text-gray-900 py-20 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
						Membership Plans
					</h1>
					<p className="text-xl text-gray-400 dark:text-gray-600">
						Choose the perfect plan for your journey
					</p>
				</motion.div>

				{/* Benefits Grid */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="grid md:grid-cols-3 gap-6 mb-16">
					{benefits.map((benefit, idx) => (
						<div
							key={idx}
							className="bg-gray-900/50 dark:bg-gray-100/50 p-6 rounded-lg text-center border border-gray-800 dark:border-gray-300">
							<div className="text-4xl mb-3">{benefit.icon}</div>
							<h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
							<p className="text-gray-400 dark:text-gray-600">{benefit.desc}</p>
						</div>
					))}
				</motion.div>

				{/* Pricing Plans */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 justify-center max-w-4xl mx-auto">
					{plans.map((plan, idx) => (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.05 }}
							className={`rounded-lg p-8 transition-all ${
								plan.highlighted
									? "bg-gradient-to-br from-green-500/20 to-blue-500/20 dark:from-green-700/30 dark:to-blue-700/30 border-2 border-green-500 dark:border-green-700 shadow-lg shadow-green-500/20"
									: "bg-gray-900/50 dark:bg-gray-100/50 border border-gray-800 dark:border-gray-300"
							}`}>
							{plan.highlighted && (
								<div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold rounded-full">
									Most Popular
								</div>
							)}
							<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
							<p className="text-gray-400 dark:text-gray-600 mb-4">{plan.description}</p>
							<div className="mb-6">
								<span className="text-4xl font-bold">{plan.price}</span>
								<span className="text-gray-400 dark:text-gray-600"> {plan.period}</span>
							</div>
							<a
								href={plan.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`block text-center w-full py-2 px-4 rounded-lg font-bold mb-6 transition-all ${
									plan.highlighted
									? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
									: "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300"
								}`}
								>
								Get Started
							</a>
							<div className="space-y-3">
								{plan.features.map((feature, fidx) => (
									<div key={fidx} className="flex items-start gap-3">
										<Check size={20} className="text-green-500 dark:text-green-700 flex-shrink-0 mt-0.5" />
										<span className="text-gray-300 dark:text-gray-700">{feature}</span>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* FAQ Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 dark:from-purple-100/10 dark:to-pink-100/10 p-8 rounded-lg border border-purple-500/30 dark:border-purple-700/30">
					<h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
					<div className="space-y-4">
						{[
							{
								q: "Can I change my membership plan?",
								a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
							},
							{
								q: "Is there a refund policy?",
								a: "We offer a 30-day money-back guarantee if you're not satisfied with your membership."
							},
							{
								q: "Do I get access to past events?",
								a: "Yes, members get access to recordings and materials from past events."
							},
							{
								q: "How do I contact support?",
								a: "You can reach our support team at [CONTACT_EMAIL] or [CONTACT_PHONE]."
							}
						].map((faq, idx) => (
							<div key={idx} className="border-b border-gray-700 dark:border-gray-300 pb-4 last:border-b-0">
								<h3 className="font-bold text-lg mb-2">{faq.q}</h3>
								<p className="text-gray-400 dark:text-gray-600">{faq.a}</p>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Membership;
