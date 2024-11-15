import GreenCircle from '../components/GreenCircle';
import HeroSectionRings from '../components/HeroSectionRings';

const PortfolioHero = () => {

        // Create a reference for the projects section
        const handleScroll = () => {
            const projectElement = document.getElementById("project");
            if (projectElement) {
                projectElement.scrollIntoView({ behavior: 'smooth' });
            }
        };



    const handleClick = () => {
        window.open('https://api.whatsapp.com/send/?phone=9203348885173&text&type=phone_number&app_absent=0', '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="flex items-center justify-center h-screen text-white" id='home'>
            {/* Hero Section */}

            <HeroSectionRings />
            <div >
                <GreenCircle />
                <div className="max-w-lg mx-auto">
                    <h1 className="mt-8 font-serif text-3xl tracking-wide text-center md:text-5xl">Building Exceptional User Experiences</h1>
                    <p className="max-w-md mx-auto mt-4 text-center text-white/60 md:text-lg lg:text-xl" >I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
                    <button className="z-50 inline-flex items-center h-12 gap-2 px-6 border border-white/15 rounded-xl" onClick={handleScroll}>
                        <span className="font-semibold">Explore My Work</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
                        </svg>
                    </button>
                    <button className="z-50 inline-flex items-center h-12 gap-2 px-6 text-gray-900 bg-white border border-white rounded-xl" onClick={handleClick}>
                        <span>👋</span>
                        <span className="font-semibold"> Let's Connect </span>
                    </button>
                </div>
            </div>

        </div >
    );
}

export default PortfolioHero;
