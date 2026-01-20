import { motion } from "motion/react";
import Button from "../components/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
						About ACM
					</h1>
					<p className="text-xl text-gray-400 dark:text-gray-600">
						Association for Computing Machinery
					</p>
				</motion.div>

				{/* Mission Section */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mb-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 dark:from-green-100/10 dark:to-blue-100/10 p-8 rounded-lg border border-green-500/30 dark:border-green-700/30">
					<h2 className="text-3xl font-bold mb-4">Our Mission</h2>
					<p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
						ACM is dedicated to advancing computing as a science and profession. We foster innovation, 
						collaboration, and excellence in computer science and technology. Our mission is to empower 
						students and professionals to achieve their full potential through education, networking, and 
						community engagement.
					</p>
				</motion.div>

				{/* Vision Section */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-16 bg-gradient-to-r from-blue-900/20 to-green-900/20 dark:from-blue-100/10 dark:to-green-100/10 p-8 rounded-lg border border-blue-500/30 dark:border-blue-700/30">
					<h2 className="text-3xl font-bold mb-4">Our Vision</h2>
					<p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
						To be the leading platform for computing professionals and students, creating a vibrant 
						community where innovation thrives, knowledge is shared, and careers are built. We envision 
						a world where technology drives positive change and every individual has access to opportunities 
						for growth and success.
					</p>
				</motion.div>

				{/* Values Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								title: "Excellence",
								desc: "We strive for the highest standards in everything we do"
							},
							{
								title: "Innovation",
								desc: "We embrace new ideas and technologies to drive progress"
							},
							{
								title: "Community",
								desc: "We believe in the power of collaboration and mutual support"
							},
							{
								title: "Integrity",
								desc: "We uphold ethical standards and transparency in all actions"
							},
							{
								title: "Inclusivity",
								desc: "We welcome diverse perspectives and backgrounds"
							},
							{
								title: "Growth",
								desc: "We foster continuous learning and professional development"
							}
						].map((value, idx) => (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.05 }}
								className="bg-gradient-to-br from-green-500/10 to-blue-500/10 dark:from-green-700/20 dark:to-blue-700/20 p-6 rounded-lg border border-green-500/20 dark:border-green-700/40 hover:border-green-500/50 dark:hover:border-green-700/60 transition-all">
								<h3 className="text-xl font-bold mb-2 text-green-400 dark:text-green-600">
									{value.title}
								</h3>
								<p className="text-gray-300 dark:text-gray-700">{value.desc}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* History Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mb-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 dark:from-purple-100/10 dark:to-pink-100/10 p-8 rounded-lg border border-purple-500/30 dark:border-purple-700/30">
					<h2 className="text-3xl font-bold mb-4">Our History</h2>
					<p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed mb-4">
						Founded in [YEAR], ACM has been at the forefront of computing education and professional 
						development. Over the years, we have grown into a thriving community of students, professionals, 
						and industry leaders dedicated to advancing the field of computer science.
					</p>
					<p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
						Our chapter has organized numerous workshops, seminars, hackathons, and networking events that 
						have impacted thousands of students and professionals in the computing field.
					</p>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="text-center">
					<h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
					<p className="text-lg text-gray-400 dark:text-gray-600 mb-8">
						Be part of something bigger. Connect with like-minded professionals and students.
					</p>
                    <div className="flex justify-center">
  						<Link to="/membership">
    						<Button text="Become a Member" />
  						</Link>
					</div>
	
				</motion.div>
			</div>
		</div>
	);
};

export default AboutUs;
