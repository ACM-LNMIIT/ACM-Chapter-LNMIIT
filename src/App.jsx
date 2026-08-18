import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import "./App.css";
import Home from "./pages/home";
import ComingSoon from "./pages/ComingSoon";
import Heading from "./components/Event/Heading";
import Content from "./components/Event/Content";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "./components/Team/team";
import PhotoGallery from "./components/Photo/photogallery";
import BlogsPage from "./components/Blogs/BlogsPage";
import NavBar from "./components/navBar";
import AboutUs from "./pages/aboutus";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Membership from "./pages/membership";
import TeamPage from "./pages/teampage";
import ContactUs from "./pages/contactus";

function App() {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Router>
			<div className="relative overflow-x-hidden">
				<NavBar isOpen={isOpen} setOpen={setOpen} />
			<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black bg-opacity-70 md:hidden backdrop-blur-sm z-50"
					onClick={() => setOpen(false)}
				>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="absolute right-0 top-0 h-full w-[75%] max-w-sm dark:bg-[#f0e9ba] bg-zinc-900 shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex flex-col text-white dark:text-zinc-900 text-xl font-semibold h-full pt-20 pb-8 px-8">
							<div
								onClick={() => setOpen(false)}
								className="absolute top-4 right-4 border-2 border-white dark:border-zinc-900 px-4 rounded-full p-2 hover:bg-white/10 dark:hover:bg-zinc-900/10 cursor-pointer transition-colors">
								Close
							</div>
							<nav className="flex flex-col gap-8 flex-1 justify-center">
								{[
									{ label: "Home", to: "/" },
									{ label: "About Us", to: "/aboutus" },
									{ label: "Blog", to: "/blog" },
									{ label: "Gallery", to: "/gallery" },
									{ label: "Events", to: "/events" },
									{ label: "Membership", to: "/membership" },
									{ label: "Team", to: "/team" },
									{ label: "Contact Us", to: "/contactus" },
								].map((item, i) => (
									<motion.div
										key={item.to}
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: i * 0.05 + 0.15 }}
									>
										<Link
											onClick={() => setOpen(false)}
											to={item.to}
											className="hover:text-[#bb86fc] transition-colors"
										>
											{item.label}
										</Link>
									</motion.div>
								))}
							</nav>
						</div>
					</motion.div>
				</motion.div>
			)}
			</AnimatePresence>
			<div className="pt-[7vh]">
					{" "}
					{/* Prevent content from going behind fixed navbar */}
					<Routes>
						<Route
							path="/"
							element={
								<div className="min-h-fit bg-[#020B05] dark:bg-[#e8e7c9]">
									<Home />
									<PhotoGallery />
									<Heading />
									<Content />
									<Team />
								</div>
							}
						/>
						<Route path="/aboutus" element={<AboutUs />} />
						<Route path="/blog" element={<BlogsPage />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/events" element={<Events />} />
						<Route path="/membership" element={<Membership />} />
						<Route path="/team" element={<TeamPage />} />
						<Route path="/contactus" element={<ContactUs />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
