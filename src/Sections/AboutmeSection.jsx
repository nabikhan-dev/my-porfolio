import ReadBook from '../assets/images/book-cover.png';
import InterstCard from '../components/HobbiesCard';
import LocaionCard from '../components/LocaionCard';
import SkillsCard from '../components/SkillsCard';

export default function AboutmeSection() {
    return (
        <div className="flex items-center justify-center " id='about'>
    
            <div className="text-center w-[1220px]">
              
                <p className="font-semibold tracking-widest text-transparent uppercase bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text">
                    About Me
                </p>

                {/* Main heading */}
                <h2 className="mt-6 font-serif text-3xl text-white md:text-5xl">
                    A Glimpse into My World
                </h2>

                {/* Description */}
                <p className="max-w-md mx-auto mt-4 text-white/60 text-md md:text-lg lg:text-xl">
                    Learn more about who I am, what I do, and what inspires me.
                </p>
                
                {/* Main content grid */}
                <div className="flex flex-col gap-8 mt-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
                        {/* Book Cover Section */}
                        <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none h-[320px] md:col-span-4 lg:col-span-1">
                            <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: "url('/_next/static/media/grain.52591b0c.jpg')" }}></div>
                            <div className="flex flex-col p-6 md:py-8 md:px-10">
                                <div className="inline-flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="size-9 text-emerald-300">
                                        <path fill="currentColor" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9"></path>
                                    </svg>
                                    <h3 className="font-serif text-3xl text-white">My Reads</h3>
                                </div>
                                <p className="max-w-xs mt-2 text-sm lg:text-base text-white/60 text-start">
                                    Explore the books shaping my perspective.
                                </p>
                            </div>
                            
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <img
                                    alt="Book cover"
                                    loading="lazy"
                                    width="320"
                                    height="525"
                                    decoding="async"
                                    data-nimg="1"
                                    style={{ color: 'transparent' }}
                                    src={ReadBook}
                                    srcSet={ReadBook}
                                />
                            </div>
                        </div>

                      
                        <SkillsCard />
                        <InterstCard/>
                        <LocaionCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}
