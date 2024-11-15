// import React from 'react';

export default function FooterSection() {
    return (
        <footer className="relative mt-32 -z-9 overflow-x-clip">
            <div
                className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
                style={{
                    maskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)',
                }}
            ></div>
            <div className="flex justify-center w-full max-w-screen-lg mx-auto">
                <div className="flex flex-col items-center w-full gap-8 py-6 text-sm border-t border-white/15 md:flex-row md:justify-between">
                    <div className="text-white/40">© 2024. All rights reserved.</div>
                    <nav className="flex flex-col items-center gap-8 md:flex-row">
                        <a
                            href="https://www.behance.net/nabiwadaan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5"
                        >
                            <span className="font-semibold text-white ">Behance</span>
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
                        </a>
                        <a
                            href="https://www.facebook.com/share/16mNAtGMJz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5"
                        >
                            <span className="font-semibold text-white">Facebook</span>
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
                        </a>
                        <a
                            href="https://github.com/nabikhan-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5"
                        >
                            <span className="font-semibold text-white">GitHub</span>
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
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-nabi-061546298"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5"
                        >
                            <span className="font-semibold text-white">LinkedIn</span>
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
                        </a>
                    </nav>
                </div>
            </div>

        </footer>
    );
}
