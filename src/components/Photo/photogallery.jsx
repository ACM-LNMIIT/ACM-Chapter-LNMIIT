import { useState, useRef, useEffect } from "react";
import { imageAssets } from "../../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundGradient from "../ui/background-gradient";

const fallbackImage = "path/to/fallback/image.jpg";

const PhotoGallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const galleryRef = useRef(null);
  const imageCount = imageAssets.length;

  // Update visible count on resize
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024)
        setVisibleCount(3); // lg
      else if (window.innerWidth >= 768)
        setVisibleCount(2); // md
      else setVisibleCount(1); // mobile
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        setScrollPosition(galleryRef.current.scrollLeft);
      }
    };

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener("scroll", handleScroll);
      return () => galleryElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (galleryRef.current) {
      const containerWidth = galleryRef.current.offsetWidth;
      const scrollAmount = containerWidth / visibleCount;
      const newPosition = Math.max(0, scrollPosition - scrollAmount);
      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      const containerWidth = galleryRef.current.offsetWidth;
      const scrollAmount = containerWidth / visibleCount;
      const maxScroll = galleryRef.current.scrollWidth - containerWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const goToSlide = (index) => {
    if (galleryRef.current) {
      const containerWidth = galleryRef.current.offsetWidth;
      const newPosition = index * containerWidth;
      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  // Calculate current slide index
  const currentSlideIndex = galleryRef.current
    ? Math.round(scrollPosition / (galleryRef.current.offsetWidth || 1))
    : 0;

  // Calculate total slides based on visible count
  const totalSlides = Math.ceil(imageCount / visibleCount);

  return (
    <div className="w-full mt-14 pt-10 text-black bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:text-white dark:bg-gradient-to-b dark:from-[#fbfbd3] dark:to-[#f0e9ba] py-10 px-5">
      <div className="w-full mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="bg-gradient-to-b from-[#F1F1EF] via-slate-100 to-[#f1f1ef8d] dark:bg-gradient-to-b dark:from-[#020B05] dark:via-slate-900 dark:to-[#020B058d] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold">
            Photos
          </h2>
          <p className="text-center text-[#F1F1EF99] dark:text-[#020B0599] mt-4 text-sm sm:text-base">
            Here are some photos of our events
          </p>
        </div>

        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            disabled={scrollPosition <= 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 dark:bg-white/70 text-white dark:text-black p-2 rounded-full hover:bg-black/90 dark:hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Gallery Container */}
          <div
            ref={galleryRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-6 px-12 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {imageAssets.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% / ${visibleCount}) - 1.5rem)`,
                  minWidth: `calc((100% / ${visibleCount}) - 1.5rem)`,
                }}
              >
                <BackgroundGradient>
                  <div className="relative overflow-hidden shadow-lg rounded-lg">
                    <img
                      className="h-48 w-full sm:h-56 md:h-64 lg:h-72 object-cover"
                      src={item.image || fallbackImage}
                      alt={`Event ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            disabled={
              galleryRef.current &&
              scrollPosition >=
                galleryRef.current.scrollWidth - galleryRef.current.offsetWidth
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 dark:bg-white/70 text-white dark:text-black p-2 rounded-full hover:bg-black/90 dark:hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlideIndex === index
                  ? "bg-white dark:bg-black w-4"
                  : "bg-white/50 dark:bg-black/50 hover:bg-white/70 dark:hover:bg-black/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
