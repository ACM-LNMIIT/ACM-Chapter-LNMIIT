import 'aos/dist/aos.css';

function Heading() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className='text-center xl:w-[100vw]'>
        <h1 className='text-5xl pt-10 font-inter bg-custom-gradient dark:bg-gradient-to-r dark:from-[#020B05] dark:to-[#020B05] bg-clip-text text-transparent'>Events</h1>
        <p className='font-inter mt-1 text-custom-gray dark:text-gray-900'>Stay updated with our latest events</p>
    </div>
  )
}

export default Heading