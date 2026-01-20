// import { motion } from "motion/react";
// import { useState } from "react";

// const Gallery = () => {
// 	const [selectedCategory, setSelectedCategory] = useState("all");

// 	const galleryItems = [
// 		{
// 			id: 1,
// 			category: "events",
// 			title: "Tech Conference 2024",
// 			image: "[IMAGE_PLACEHOLDER_1]"
// 		},
// 		{
// 			id: 2,
// 			category: "workshops",
// 			title: "Web Development Workshop",
// 			image: "[IMAGE_PLACEHOLDER_2]"
// 		},
// 		{
// 			id: 3,
// 			category: "hackathon",
// 			title: "Annual Hackathon",
// 			image: "[IMAGE_PLACEHOLDER_3]"
// 		},
// 		{
// 			id: 4,
// 			category: "events",
// 			title: "Networking Event",
// 			image: "[IMAGE_PLACEHOLDER_4]"
// 		},
// 		{
// 			id: 5,
// 			category: "workshops",
// 			title: "AI & Machine Learning",
// 			image: "[IMAGE_PLACEHOLDER_5]"
// 		},
// 		{
// 			id: 6,
// 			category: "hackathon",
// 			title: "Hackathon Finals",
// 			image: "[IMAGE_PLACEHOLDER_6]"
// 		},
// 		{
// 			id: 7,
// 			category: "events",
// 			title: "Career Fair",
// 			image: "[IMAGE_PLACEHOLDER_7]"
// 		},
// 		{
// 			id: 8,
// 			category: "workshops",
// 			title: "Cloud Computing Basics",
// 			image: "[IMAGE_PLACEHOLDER_8]"
// 		}
// 	];

// 	const categories = ["all", "events", "workshops", "hackathon"];

// 	const filteredItems = selectedCategory === "all"
// 		? galleryItems
// 		: galleryItems.filter(item => item.category === selectedCategory);

// 	return (
// 		<div className="min-h-screen dark:bg-[#e8e9cd] bg-[#020B05] text-white dark:text-gray-900 py-20 px-4">
// 			<div className="max-w-7xl mx-auto">
// 				{/* Header */}
// 				<motion.div
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5 }}
// 					className="text-center mb-16">
// 					<h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
// 						Photo Gallery
// 					</h1>
// 					<p className="text-xl text-gray-400 dark:text-gray-600">
// 						Moments from our events and activities
// 					</p>
// 				</motion.div>

// 				{/* Category Filter */}
// 				<motion.div
// 					initial={{ opacity: 0, y: 10 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5, delay: 0.1 }}
// 					className="flex flex-wrap justify-center gap-4 mb-12">
// 					{categories.map((cat) => (
// 						<button
// 							key={cat}
// 							onClick={() => setSelectedCategory(cat)}
// 							className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
// 								selectedCategory === cat
// 									? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
// 									: "bg-gray-800 dark:bg-gray-200 text-gray-300 dark:text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-300"
// 							}`}>
// 							{cat}
// 						</button>
// 					))}
// 				</motion.div>

// 				{/* Gallery Grid */}
// 				<motion.div
// 					layout
// 					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// 					{filteredItems.map((item, idx) => (
// 						<motion.div
// 							key={item.id}
// 							initial={{ opacity: 0, scale: 0.9 }}
// 							animate={{ opacity: 1, scale: 1 }}
// 							transition={{ duration: 0.3, delay: idx * 0.05 }}
// 							whileHover={{ scale: 1.05 }}
// 							className="group relative overflow-hidden rounded-lg bg-gray-800 dark:bg-gray-200 aspect-square cursor-pointer">
// 							{/* Image Placeholder */}
// 							<div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 dark:from-green-700/20 dark:to-blue-700/20 flex items-center justify-center">
// 								<div className="text-center">
// 									<div className="text-4xl mb-2">📷</div>
// 									<p className="text-sm text-gray-400 dark:text-gray-600">
// 										{item.image}
// 									</p>
// 								</div>
// 							</div>

// 							{/* Overlay */}
// 							<div className="absolute inset-0 bg-black/60 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
// 								<div>
// 									<h3 className="text-lg font-bold text-white">{item.title}</h3>
// 									<p className="text-sm text-gray-300 capitalize">{item.category}</p>
// 								</div>
// 							</div>
// 						</motion.div>
// 					))}
// 				</motion.div>

// 				{/* Empty State */}
// 				{filteredItems.length === 0 && (
// 					<motion.div
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						className="text-center py-12">
// 						<p className="text-xl text-gray-400 dark:text-gray-600">
// 							No images found in this category
// 						</p>
// 					</motion.div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Gallery;
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    // ACM Orientation Images (6)
    {
      id: 1,
      category: "acm",
      title: "ACM Orientation Session 1",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583371/acm1_wuevig.webp",
    },
    {
      id: 2,
      category: "acm",
      title: "ACM Orientation Session 2",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583384/acm2_nku2oq.webp",
    },
    {
      id: 3,
      category: "acm",
      title: "ACM Orientation Session 3",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583404/acm3_zjgmqd.webp",
    },
    {
      id: 4,
      category: "acm",
      title: "ACM Orientation Session 4",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583410/acm4_zgtrv0.webp",
    },
    {
      id: 5,
      category: "acm",
      title: "ACM Orientation Session 5",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583386/acm5_kjgdrs.webp",
    },
    {
      id: 6,
      category: "acm",
      title: "ACM Orientation Session 6",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626425/acm6_oxbdmd.webp",
    },

    // Big O Rush Images (6)
    {
      id: 7,
      category: "bor",
      title: "Big O Rush Activity 1",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583433/bor3_lra9c1.webp",
    },
    {
      id: 8,
      category: "bor",
      title: "Big O Rush Activity 2",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583399/bor4_p5wu1v.webp",
    },
    {
      id: 9,
      category: "bor",
      title: "Big O Rush Activity 3",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583394/bor5_s8tihc.webp",
    },
    {
      id: 10,
      category: "bor",
      title: "Big O Rush Activity 4",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583391/bor6_oat3ew.webp",
    },

    // ESP Talk Images (6)
    {
      id: 13,
      category: "esp",
      title: "ESP Talk Session 1",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583425/esp1_kyvsme.webp",
    },
    {
      id: 16,
      category: "esp",
      title: "ESP Talk Session 4",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583378/esp4_s366f5.webp",
    },
    {
      id: 17,
      category: "esp",
      title: "ESP Talk Session 5",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583378/esp4_s366f5.webp",
    },
    {
      id: 18,
      category: "esp",
      title: "ESP Talk Session 6",
      image:
        "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768583416/esp5_ddhtst.webp",
    },
  ];

  const categories = ["all", "acm", "bor", "esp"];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen dark:bg-[#e8e9cd] bg-[#020B05] text-white dark:text-gray-900 pt-32 px-4">


      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            ACM Photo Gallery
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-600">
            Moments from our events and activities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold capitalize ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  : "bg-gray-800 dark:bg-gray-200 text-gray-300 dark:text-gray-700"
              }`}
            >
              {cat === "all"
                ? "All Events"
                : cat === "acm"
                  ? "ACM Orientation"
                  : cat === "bor"
                    ? "Big O Rush"
                    : "ESP Talk"}
            </button>
          ))}
        </div>

        {/* Gallery Grid - NO HOVER EFFECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-gray-800 dark:bg-gray-200 aspect-square"
            >
              {/* Image only - no overlay, no hover effects */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Static caption always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                <p className="text-sm font-medium text-white truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-300">
                  {item.category === "acm"
                    ? "ACM Orientation"
                    : item.category === "bor"
                      ? "Big O Rush"
                      : "ESP Talk"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400 dark:text-gray-600">
              No images found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
