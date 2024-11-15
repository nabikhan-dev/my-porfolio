import ProjectCard from "../components/ProjectCard";
import swatGuidner from '../assets/images/swatguinder.png'
import peronalMangerApp from '../assets/images/peronalmangerApp.png'
import portfolio from '../assets/images/portfolio.png'
export default function ProjectSection() {
    const openProject1 = () => {
        window.open('https://github.com/nabikhan-dev/React-Native_Swat-Travel-App', '_blank', 'noopener,noreferrer');

      };
    const openProject2 = () => {
        window.open('https://github.com/nabikhan-dev/PersonalManagerApp', '_blank', 'noopener,noreferrer');

      };
      const openProject3 = () => {
        window.open('https://zahidullah-protfolio.netlify.app/', '_blank', 'noopener,noreferrer');
      };
    return (
        <div >
            <div className="flex items-center justify-center mt-24 " id='project' >
                <p className="font-semibold tracking-widest text-center text-transparent uppercase bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text">
                    Real-World Results
                </p>
            </div>
            <h2 className="mt-10 font-serif text-3xl text-center text-white md:text-5xl">Featured Projects</h2>
            <p className="max-w-md mx-auto mt-4 text-center md:text-lg lg:text-xl text-white/60">
                See how I transformed concepts into engaging digital experiences.
            </p>
            <div className="flex flex-col items-start gap-20 mt-10 md:mt-20 ">




                <ProjectCard
                    img={swatGuidner}
                    handleClick={openProject1}
                    keypoint1="Enhanced user experience by 40%"
                    keypoint2="Improved site speed by 50%"
                    keypoint3="Increased mobile traffic by 35%"
                    heading="Swat Guidaner App"
                    year="2024"
                    title="University Android App React Native Expo"
                    name="View Project"
                />    <ProjectCard
                    img={peronalMangerApp}
                    handleClick={openProject2}
                    keypoint1="improved design by 60%"
                    keypoint2="Expanded customer reach by 35%"
                    keypoint3="Increased brand awareness by 15%"
                    heading="Peronal Manger App "
                    year="2024"
                    title="Organize Tasks, Goals, and Schedules for Success."
                    name="View Project"
                />    <ProjectCard
                    img={portfolio}
                    handleClick={openProject3}
                    keypoint1="Combining functionality with creativity."
                    keypoint2="Expertise in React and modern CSS."
                    keypoint3="Delivering exceptional user experiences."
                    heading="Swat Guidaner App"
                    year="2024"
                    title="My Code, My Craft - Zahid's Portfolio"
                    name="View Project"
                />

             
            </div>

        </div>
    )
}
