import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { titles } from "../utils/utils.js";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavBar({ isOpen, setOpen }) {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check if dark mode is enabled in localStorage
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		setIsDark(isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		const newDarkMode = !isDark;
		setIsDark(newDarkMode);
		if (newDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("darkMode", "true");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("darkMode", "false");
		}
		// Dispatch custom event for theme change
		window.dispatchEvent(
			new CustomEvent("themeChange", { detail: { isDark: newDarkMode } })
		);
	};

	const getPath = (title) => {
		const path = title.toLowerCase().replace(/\s+/g, "");
		return path === "home" ? "/" : `/${path}`;
	};

	return (
		<motion.div
			initial={{ y: "-98%", opacity: 0.2 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 90, damping: 30 }}
			className="fixed top-0 left-0 right-0 z-50 bg-[#020B05] dark:bg-[#C5C4AF] dark:text-gray-900 max-sm:justify-end max-sm:px-3 gap-8 h-[7vh] max-h-[70px] min-h-[45px] border-b-2 px-[150px] flex justify-between items-center text-[1.05rem] text-slate-200 border-slate-200/30">
			<div className="w-[30%]"></div>
			{titles.map((e, i) => (
				<Link
					key={i}
					to={getPath(e)}
					className="hover-underline-animation cursor-pointer">
					{e}
				</Link>
			))}
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
				aria-label="Toggle theme">
				{isDark ? (
					<Sun className="w-5 h-5 text-zinc-950" />
				) : (
					<Moon className="w-5 h-5 text-slate-200" />
				)}
			</button>
			<div className="sm:hidden">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
		</motion.div>
	);
}
