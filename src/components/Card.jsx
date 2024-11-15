

export default function TestimonialCard(props) {
    return (
        <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
            <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: "url('/_next/static/media/grain.52591b0c.jpg')" }}></div>
            <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <img
                        alt={props.name}  // Dynamically set alt text based on the name
                        loading="lazy"
                        width="100"
                        height="100"
                        className="max-h-full"
                        src={props.imgSrc}  // Dynamically set src for the image
                    />
                </div>
                <div>
                    <div className="font-semibold text-white text-left">{props.name}</div>
                    <div className="text-sm text-white/40">{props.title}</div>
                </div>
            </div>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-white">{props.testimonial}</p>
        </div>
    );
}
