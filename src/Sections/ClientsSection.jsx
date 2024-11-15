import TestimonialCard from '../components/Card'; // Assuming you create this component
import Avatr1 from '../assets/images/memoji-avatar-1.png'
import Avatr2 from '../assets/images/memoji-avatar-2.png'
import Avatr3 from '../assets/images/memoji-avatar-3.png'
import Avatr4 from '../assets/images/memoji-avatar-4.png'
import Avatr5 from '../assets/images/memoji-avatar-5.png'
export default function ClientsSection() {
    const testimonials = [
        {
            name: 'Zahid Ullah',
            title: 'UI/UX Designer @ USA',
            imgSrc: Avatr1,
            testimonial: 'Nabi was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We are thrilled with the results!',
        },
        {
            name: 'Israr Ahmad ',
            title: 'Head of Design @ GreenLeaf',
            imgSrc: Avatr2,
            testimonial: 'Working with Nabi was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations..',
        },
        {
            name: 'Muhammad Amir',
            title: 'CEO @ InnovateCo',
            imgSrc: Avatr3,
            testimonial: 'Nabi ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We could not be happier.',
        },
        {
            name: 'Daniel White',
            title: 'Product Manager @ GlobalTech',
            imgSrc: Avatr4,
            testimonial: 'Nabi is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We are already seeing positive feedback from our customers.',
        },
        {
            name: 'Olivia Green',
            title: 'Product Manager @ GlobalTech',
            imgSrc: Avatr5,
            testimonial: 'Nabi is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We are already seeing positive feedback from our customers',
        },
        // Add more testimonials here
    ];
    
    return (
        <div className="relative h-screen overflow-hidden mt-18" id='testimonial'>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="items-center justify-center ">
                    <p className="font-semibold tracking-widest text-center text-transparent uppercase bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text">
                        Happy Clients
                    </p>

                    <h2 className="mt-6 font-serif text-3xl text-center text-white md:text-5xl">
                        What Clients Say about Me
                    </h2>
                    <p className="max-w-md mx-auto mt-4 text-center md:text-lg lg:text-xl text-white/60">
                        Do not just take my word for it, see what my clients have to say about my work.
                    </p>
                </div>
                <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
                    <div className="flex gap-8 pr-8 flex-none animate-scroll-left [animation-duration:30s] hover:[animation-play-state:paused]">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </div >
        </div>
    );
}
