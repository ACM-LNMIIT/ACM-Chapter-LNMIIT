import 'aos/dist/aos.css';

function Content() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="">
      <div className="h-[70vh] w-[100vw] flex flex-col-reverse gap-10 px-4 md:flex-row md:h-[50vh] md:items-center xl:h-[75vh] xl:w-[90vw] xl:gap-10 xl:-mt-8 xl:ml-20 2xl:mt-0">
        <div className="w-full ht-[40%] space-y-12 md:w-[50%] md:p-10 xl:w-[40%] xl:pt-8 2xl:w-[50%]">
          <h1 className="text-6xl bg-custom-gradient dark:bg-gradient-to-r dark:from-[#020B05] dark:to-[#020B05] bg-clip-text text-transparent font-inter">
            Club Intro
          </h1>
          <p className="text-2xl text-custom-gray dark:text-gray-900">
            Welcome to our club, where passion meets purpose! We foster
            creativity, collaboration, and learning through innovative projects
            and activities. Join us to grow,connect,and make a difference
            together!
          </p>
        </div>

        <div
          style={{ backgroundImage: `url('/src/assets/img11.png')` }}
          className="h-[70%] w-full bg-cover bg-center rounded-3xl md:w-[50%] md:h-[70%] xl:h-[70%] xl:w-[50%] 2xl:w-[40%] 2xl:h-[70%]"
        ></div>
      </div>

      <div className="h-[80vh] w-[100vw] flex flex-col gap-10 mt-20 px-4 py-4 md:flex-row md:h-[60vh] md:mt-0 md:items-center xl:h-[75vh] xl:w-[90vw] xl:-mt-36 xl:ml-20 2xl:mt-0">
        <div
          style={{ backgroundImage: `url('/src/assets/img22.png')`}}
          className="h-[60%] w-full bg-cover bg-center rounded-2xl md:w-[60%] md:h-[70%] xl:ml-2 xl:h-[70%] xl:w-[50%] 2xl:w-[40%] 2xl:h-[70%]"
        ></div>

        <div className="w-full h-[40%] space-y-12 pt-8 md:w-[40%] md:h-[70%] md:p-10 xl:w-1/2 xl:ml-5">
          <h1 className="text-6xl bg-custom-gradient dark:bg-gradient-to-r dark:from-[#020B05] dark:to-[#020B05] bg-clip-text text-transparent font-inter text-end">
            ROCS
          </h1>
          <p className="text-xl dark:text-gray-900 text-end text-custom-gray">
            The ACM ROCS workshop aims to provide students and researchers with
            a comprehensive understanding of the current and emerging research
            opportunities within the field of computer science. This workshop is
            designed to inspire participants to explore various research
            domains, understand the methodologies involved, and equip them with
            the necessary tools to embark on their research journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
