export const acmInfo =
	"The Association for Computing Machinery (ACM) is an international learned society for computing. It was founded in 1947 and is the world’s largest scientific and educational computing society. It is a not-for-profit professional membership group. Its membership is more than 100,000 as of 2011. Its headquarters are in New York City.";
export const acmMotto =
	"The ACM is an umbrella organization for academic and scholarly interests in computer science. Its motto is “Advancing Computing as a Science & Profession”.";
export const titles = [
	"Home",
	"About Us",
	"Blog",
	"Gallery",
	"Events",
	"Membership",
	"Team",
	"Contact Us",
];
export const acmPara =
	"“ACM LNMIIT Student Chapter is all set to fly high. We have worked really hard preparing ourselves for resonating with the vibrancy of ACM. As of now, our focus is to establish a systematic way to impart knowledge from the ocean of ACM’s library. Our team is all set for a great start. Let’s work for the best!”";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

