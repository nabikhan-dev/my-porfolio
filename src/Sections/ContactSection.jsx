

export default function ContactSection() {
    return (
        <section className="flex items-center justify-center mt-56" id="contact">

            <div className="relative z-0 py-8 overflow-hidden text-center text-gray-900 bg-gradient-to-r from-emerald-300 to-sky-400 md:px-12 rounded-3xl md:text-left">
                <div
                    className="absolute inset-0 opacity-5 -z-10"
                  
                ></div>
                <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
                    <div>
                        <h2 className="font-serif text-2xl md:text-3xl">
                            Let's Create something amazing together
                        </h2>
                        <p className="text-sm text-center md:text-base lg:text-xl">
                            Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals
                        </p>
                    </div>
                    <div>
                        <a
                            href="mailto:nabiwazir29@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="inline-flex items-center h-12 gap-2 px-6 text-white bg-gray-900 border border-gray-900 rounded-xl w-max">
                                <span className="font-semibold">Contact Me</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="size-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 17L17 7M7 7h10v10"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
