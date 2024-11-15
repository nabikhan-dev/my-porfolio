import Map from '../assets/images/map.png'
import smile from '../assets/images/memoji-smile.png'
export default function LocaionCard() {
    return (
        <div className="bg-gray-800 rounded-3xl z-0 overflow-hidden h-[320px] p-0 relative md:col-span-2 lg:col-span-1 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none">
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: 'url(/_next/static/media/grain.52591b0c.jpg)' }}
            ></div>

            <a
                href="https://maps.app.goo.gl/LkAFWB1fc6D12dtGA"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    alt="Map Image"
                    loading="lazy"
                    width="711"
                    height="644"
                    decoding="async"
                    className="h-full w-full object-cover object-left-top"
                    style={{ color: 'transparent' }}
                    src={Map}
                />
            </a>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping"
                    style={{ animationDuration: '2s' }}
                ></div>

                <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"
                ></div>

                <img
                    alt="Smiling memoji"
                    loading="lazy"
                    width="420"
                    height="420"
                    decoding="async"
                    className="size-20"
                    style={{ color: 'transparent' }}
                   
                    src={smile}
                />
            </div>
        </div>
    )
}
