import Image from '../assets/images/image.png'
export default function GreenCircle() {
    return (
        <>

            <div className="flex flex-col items-center">
                <img
                    alt="Person peeking from behind the laptop"
                    loading="lazy"
                    width="420"
                    height="420"
                    className="size-[100px]"
                    src={Image}
                />

                <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center justify-center gap-4 rounded-lg">

                    <div className="bg-green-600 w-3 h-3 rounded-full relative">

                        <div className="bg-green-300 absolute inset-0 rounded-full animate-ping "></div>
                    </div>
                    <div className="text-sm font-medium text-white">Nabi is Available...!!</div>
                </div>
            </div>
        </>
    )
}
