// InfiniteSlider.js
import { imageAssets } from "../../assets/assets";
import Marquee from "react-fast-marquee";
import BackgroundGradient from "../ui/background-gradient";

const fallbackImage = "path/to/fallback/image.jpg"; // Replace with your fallback image path

const PhotoGallery = () => {
  return (
    <div className="w-full mt-14 pt-10 text-black bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:text-white  dark:bg-gradient-to-b dark:from-[#fbfbd3] dark:to-[#f0e9ba] py-10 px-5">
      <div className="w-full mx-auto">
        <div>
          <h2 className="bg-gradient-to-b from-[#F1F1EF] via-slate-100 to-[#f1f1ef8d] dark:bg-gradient-to-b dark:from-[#020B05] dark:via-slate-900 dark:to-[#020B058d] bg-clip-text text-transparent text-center text-4xl sm:text3xl font-bold">Photos</h2>
          <p className="text-center text-[#F1F1EF99] dark:text-[#020B0599] mb-10 text-sm sm:text-base">
            Here are some photos of our events
          </p>
        </div>

        <div>
          {/* First marquee */}
          <div>
            <Marquee pauseOnHover="true" speed={150}>
              {imageAssets.slice(0, 6).map((item, index) => (
                <BackgroundGradient key={index}>
                  <div className="relative group overflow-hidden shadow-lg mx-4 sm:mx-8">
                    <img
                      className="h-32 w-56 sm:h-40 sm:w-72 md:h-48 md:w-80 lg:h-56 lg:w-96 object-cover"
                      src={item.image || fallbackImage}
                      alt={`Event ${index + 1}`}
                    />
                  </div>
                </BackgroundGradient>
              ))}
            </Marquee>
          </div>

          {/* Second marquee */}
          <div className="mt-7 flex">
            <Marquee direction="right" pauseOnHover="true" speed={150}>
              {imageAssets.slice(6, 12).map((item, index) => (
                <BackgroundGradient key={index}>
                  <div className="relative overflow-hidden shadow-lg mx-4 sm:mx-8">
                    <img
                      className="h-32 w-56 sm:h-40 sm:w-72 md:h-48 md:w-80 lg:h-56 lg:w-96 object-cover hover:scale-105 transition-transform"
                      src={item.image || fallbackImage}
                      alt={`Event ${index + 7}`}
                    />
                  </div>
                </BackgroundGradient>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
