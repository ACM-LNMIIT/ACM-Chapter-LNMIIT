import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Button from "../button.jsx";

function Content() {
  const navigate = useNavigate();

  // Define your Cloudinary image URLs
  const img11Url =
    "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768632668/Img11_rxdkrm.png";
  const img22Url =
    "https://res.cloudinary.com/dwva7x2z8/image/upload/v1768626901/acmSpeaker_ofnudr.jpg"; // UPDATED URL

const handleSeeMore = () => {
  navigate("/events");
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  return (
    <div className="relative">
      <div data-aos="fade-up" data-aos-duration="1000" className="">
        <div className="h-[70vh] w-[100vw] flex flex-col-reverse gap-10 px-4 md:flex-row md:h-[50vh] md:items-center xl:h-[75vh] xl:w-[90vw] xl:gap-10 xl:-mt-8 xl:ml-20 2xl:mt-0">
          <div className="w-full ht-[40%] space-y-12 md:w-[50%] md:p-10 xl:w-[40%] xl:pt-8 2xl:w-[50%]">
            <h1 className="text-6xl bg-custom-gradient dark:bg-gradient-to-r dark:from-[#020B05] dark:to-[#020B05] bg-clip-text text-transparent font-inter">
              Club Intro
            </h1>
            <p className="text-2xl text-custom-gray dark:text-gray-900">
              Welcome to our club, where passion meets purpose! We foster
              creativity, collaboration, and learning through innovative
              projects and activities. Join us to grow, connect, and make a
              difference together!
            </p>
          </div>

          <div
            style={{ backgroundImage: `url('${img11Url}')` }}
            className="h-[70%] w-full bg-cover bg-center rounded-3xl md:w-[50%] md:h-[70%] xl:h-[70%] xl:w-[50%] 2xl:w-[40%] 2xl:h-[70%]"
          ></div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        className="flex justify-center mt-12 mb-20"
      >
        <Button
          onClick={handleSeeMore} text="Get Started Now"
        >
        </Button>
      </div>
    </div>
  );
}

export default Content;
