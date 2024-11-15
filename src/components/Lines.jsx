

export default function Lines() {
  const texts = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Testable", 
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Testable",
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Testable",
  ];


  return (
    <div className="mx-1 mt-40 overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 ">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
        <div
       
          className="marquee-container"
          style={{
            display: 'flex',
            overflowX: 'hidden',
            position: 'relative',
          }}
        >
          <div className='flex px-5 py-2 flex-wrap-none gap-5 animate-scroll-left [animation-duration:120s]'>
            {[...texts, ...texts].map((text, index) => (
              <div key={index} className="inline-flex items-center gap-6">
                <span className="text-sm font-extrabold text-gray-900 uppercase">{text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-gray-900 transform -rotate-12"
                >
                  <path
                    fill="currentColor"
                    d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9"
                  ></path>
                </svg>
              </div>
            ))}
          </div>
        </div>

    
      </div>
    </div>
  );
}
