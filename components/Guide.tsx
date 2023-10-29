import Image from "next/image";
const Guide = () =>     {
    return (
        <section className="max-container padding-container flex flex-col gap-20
        py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map"/>
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
            <Image src="/camp.svg" alt="camp" height={50} width={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"/>
            <h1 className="bold-52 lg:bold-88">
            Putuk Truno Camp Area
            </h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
            </p>
            <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                    {Array(5).fill(1).map((_,index) => (
                        <Image src="/star.svg" alt="star" 
                        key={index} width={24} height={24} />
                    ))}
                </div>
                <p className="bold-16 lg:bold-20 text-blue-70">
                    128k
                    <span className="regular-16 lg:regular-20 ml-1 underline">Excellent Reviews</span>
                </p>
                <div className="flex flex-col w-full gap-3 sm:flex-row">
                        <button className="transition-all gap-1
                        rounded-full mr-20 px-6 py-2 bg-green-500">
                            Download App
                        </button>
                        <button className="transition-all gap-1
                        rounded-full mr-20  btn-white">
                            <Image src="/play.svg" alt="icon" height={20} width={20} className="inline"/>
                            How We Work?
                        </button>
                </div>
            </div>
            </div>
            <div className="relative flex flex-1 items-start bg-[url('/hero.png')] bg-[-240px_-306px]
             ">
                <div className="relative z-20 w-[268px] flex-col gap-8 
                rounded-3xl bg-yellow-200 px-7 py-8">
                 <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className="regular-16 text-black">Location</p>
                    </div>
                    <p className="bold-20 text-black">
                        Cairo, Egypt
                    </p>
                 </div>  
                <div className="flexBetween">
                    <div className="flex flex-col">
                        <p className="regular-16 block text-black">Distance</p>
                        <p className="bold-20 text-black">185.99 mi</p>
                    </div> 
                    <div className="flex flex-col">
                        <p className="regular-16 block text-black">Elevation</p>
                        <p className="bold-20 text-black">2.08 km</p>
                    </div>
                 </div>  
                </div>
                
            </div>

        </section>
    )
}

export default Guide;