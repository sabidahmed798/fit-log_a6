import React from "react";
// import footerLogo from "../../assets/footer.png";
import bannerImage from "../../assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full  px-4 py-8 sm:px-6 lg:px-8">
        <div className="container mx-auto h-[448px]  overflow-hidden rounded-xl border border-white/10 bg-[#15161a]">
          <div className="grid min-h-[300px] items-center gap-8 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-2 lg:px-12">
            {/* Left Content */}
            <div className="max-w-xl">
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.15em] text-lime-400 sm:text-[10px]">
                Workout Library
              </p>

              <h1 className="max-w-lg text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px]">
                Train With Intent. Log Every Set.
              </h1>

              <p className="mt-4 max-w-md text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              <button className="mt-5 rounded-md bg-lime-400 px-4 py-2.5 text-[10px] font-bold uppercase text-black transition hover:bg-lime-300 sm:px-5 sm:py-3">
                Browse Workouts
              </button>
            </div>
            {/* 
            Right Image Area */}
            <div className="flex items-center justify-center sm:min-h-[300px] md:min-h-[260px]">
              <Image
                src={bannerImage}
                alt="Banner Image"
                width={334}
                height={334}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
