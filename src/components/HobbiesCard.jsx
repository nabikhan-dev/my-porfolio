

export default function HobbiesCard() {
  return (
    <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: "url(/_next/static/media/grain.52591b0c.jpg)" }}
      ></div>
      
      {/* Header Section */}
      <div className="flex flex-col p-6 px-6 py-6 md:py-8 md:px-10">
        <div className="inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="size-9 text-emerald-300">
            <path fill="currentColor" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9"></path>
          </svg>
          <h3 className="font-serif text-3xl text-white">Beyond the Code</h3>
        </div>
        <p className="max-w-xs mt-2 text-sm lg:text-base text-white/60 text-start">
          Explore my interests and hobbies beyond the digital realm.
        </p>
      </div>
      
      {/* Interests */}
      <div className="relative flex-1">
        {/* Interest items */}
        {[
          { label: "Painting", emoji: "🎨", style: { left: "5%", top: "5%" } },
          { label: "Photography", emoji: "📷", style: { left: "50%", top: "5%" } },
          { label: "Music", emoji: "🎶", style: { left: "10%", top: "35%" } },
          { label: "Gaming", emoji: "🎮", style: { left: "35%", top: "40%" } },
          { label: "Reading", emoji: "📖", style: { left: "70%", top: "45%" } },
          { label: "Travelling", emoji: "🗺️", style: { left: "5%", top: "65%" } },
          { label: "Fitness", emoji: "🏋️", style: { left: "45%", top: "70%" } },
        ].map((interest, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
            draggable="false"
            style={{
              ...interest.style,
              userSelect: "none",
              touchAction: "none",
            }}
          >
            <span className="font-medium text-gray-950">{interest.label}</span>
            <span>{interest.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
