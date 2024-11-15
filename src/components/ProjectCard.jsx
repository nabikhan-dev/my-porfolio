import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 mx-auto max-w-[900px] w-full">
            <div className="absolute inset-0 opacity-5"></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="z-50 text-left lg:pb-16">
                    <div className="inline-flex gap-2 text-sm font-bold tracking-widest text-transparent uppercase bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text">
                        <span>{props.title}</span><span>•</span><span>{props.year}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-white md:mt-5 md:text-4xl">{props.heading}</h3>
                    <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {[props.keypoint1, props.keypoint2, props.keypoint3].map((keypoint, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm md:text-base text-white/50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 md:size-6" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path>
                                </svg>
                                <span>{keypoint}</span>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 mt-8 font-semibold bg-white text-gray-950 md:w-auto rounded-xl"
                        onClick={props.handleClick}  // Corrected props usage for handleClick
                    >
                        <span>{props.name}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="size-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7 17L17 7M7 7h10v10"></path>
                        </svg>
                    </button>
                </div>
                <div className="relative ">
                    <img
                        alt={props.heading}  // Dynamically set alt text based on the heading
                        loading="lazy"
                        width="800"
                        height="507"
                        decoding="async"
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                        src={props.img}  // Dynamically set image source based on props
                    />
                </div>
            </div>
        </div>
    );
}
